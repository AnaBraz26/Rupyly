const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const url = "https://ereko-blockly-back.onrender.com/codigo";
const fqbn = "arduino:avr:uno";
let porta = "";

let ultimoCodigo = "";

// Detectar a porta automaticamente
function detectarPorta(callback) {
  exec("arduino-cli board list", (err, stdout, stderr) => {
    if (err) {
      console.error("❌ Erro ao listar placas:", stderr);
      return;
    }

    const linhas = stdout.split("\n").slice(1); // pula o cabeçalho
    for (const linha of linhas) {
      const colunas = linha.trim().split(/\s+/);
      if (colunas.length > 0 && colunas[0].startsWith("/dev") || colunas[0].startsWith("COM")) {
        porta = colunas[0];
        console.log(`🔌 Porta detectada automaticamente: ${porta}`);
        if (typeof callback === "function") {
          callback();
        }
        return;
      }
    }

    console.error("⚠️ Nenhuma placa encontrada. Conecte uma placa e tente novamente.");
    setTimeout(() => detectarPorta(callback), 5000);
  });
}

async function buscarEEnviarCodigo() {
  try {
    console.log("🔎 Buscando código...");
    const res = await axios.get(url);
    const { fileName, code } = res.data;

    if (code === ultimoCodigo) {
      console.log("🚨 Nenhuma mudança no código.");
      return;
    }

    ultimoCodigo = code;

    const dir = path.join(__dirname, fileName.replace(".ino", ""));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      console.log(`📂 Diretório criado: ${dir}`);
    }

    const filePath = path.join(dir, fileName);
    fs.writeFileSync(filePath, code);
    console.log(`📝 Código salvo em: ${filePath}`);

    console.log("🛠️ Compilando...");
    exec(`arduino-cli compile --fqbn ${fqbn} ${dir}`, (err, stdout, stderr) => {
      if (err) {
        const erro = "❌ Erro na compilação:\n" + stderr.replace(/[\x00-\x1F\x7F]/g, "");
        console.error(erro);
        enviarStatusParaFrontend(erro, false);
        return;
      }

      console.log("✅ Compilado! Iniciando upload...");
      exec(`arduino-cli upload -p ${porta} --fqbn ${fqbn} ${dir}`, (err2, stdout2, stderr2) => {
        if (err2) {
          const erroUpload = "❌ Erro no upload:\n" + stderr2.replace(/[\x00-\x1F\x7F]/g, "");
          console.error(erroUpload);
          enviarStatusParaFrontend(erroUpload, false);
          return;
        }
        const sucesso = "🚀 Upload feito com sucesso!\n" + stdout2;
        console.log(sucesso);
        enviarStatusParaFrontend(sucesso, true);
      });
    });
  } catch (err) {
    console.error("❌ Erro ao buscar o código:", err.message);
  }
}

function enviarStatusParaFrontend(texto, sucesso) {
  axios.post("https://ereko-blockly-back.onrender.com/status-upload", {
    sucesso,
    mensagem: texto
  }).catch((err) => {
    console.error("⚠️ Erro ao enviar status para frontend:", err.message);
  });
}

function iniciarVerificacao() {
  buscarEEnviarCodigo(); // Executa imediatamente
  setInterval(buscarEEnviarCodigo, 3000); 
}

// Iniciar: detectar a porta primeiro
detectarPorta(iniciarVerificacao);

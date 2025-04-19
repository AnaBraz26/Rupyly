const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const url = "https://ereko-blockly-back.onrender.com/codigo"; // Troque pelo seu link real
const fqbn = "arduino:avr:uno";
const porta = "/dev/ttyACM1"; // ou COM3 no Windows

let ultimoCodigo = ""; // Variável para armazenar o código da última vez

async function buscarEEnviarCodigo() {
  try {
    console.log("🔎 Buscando código...");
    const res = await axios.get(url);
    const { fileName, code } = res.data;

    // Verifica se o código mudou
    if (code === ultimoCodigo) {
      console.log("⚠️ Nenhuma mudança no código. Nenhuma ação necessária.");
      return; // Se o código não mudou, não faz nada
    }

    // Atualiza o código anterior com o código atual
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
        console.error("❌ Erro na compilação:\n", stderr);
        return;
      }

      console.log("✅ Código compilado com sucesso! Iniciando upload...");
      exec(`arduino-cli upload -p ${porta} --fqbn ${fqbn} ${dir}`, (err2, stdout2, stderr2) => {
        if (err2) {
          console.error("❌ Erro no upload:\n", stderr2);
          return;
        }
        console.log("🚀 Upload feito com sucesso!\n", stdout2);
      });
    });
  } catch (err) {
    console.error("❌ Erro ao buscar o código:", err.message);
  }
}

// Verifica periodicamente a cada 15 segundos, mas só faz upload se o código mudar
setInterval(buscarEEnviarCodigo, 15000);

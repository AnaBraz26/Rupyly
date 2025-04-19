const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const url = "https://ereko-blockly-back.onrender.com/codigo"; // troque pelo seu link real
const fqbn = "arduino:avr:uno";
const porta = "/dev/ttyACM0"; // ou COM3 no Windows

async function buscarEEnviarCodigo() {
  try {
    console.log("🔎 Buscando código...");
    const res = await axios.get(url);
    const { fileName, code } = res.data;

    const dir = path.join(__dirname, fileName.replace(".ino", ""));
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    const filePath = path.join(dir, fileName);
    fs.writeFileSync(filePath, code);

    console.log("🛠️ Compilando...");
    exec(`arduino-cli compile --fqbn ${fqbn} ${dir}`, (err, stdout, stderr) => {
      if (err) return console.error("❌ Erro na compilação:\n", stderr);

      console.log("✅ Compilado! Fazendo upload...");
      exec(`arduino-cli upload -p ${porta} --fqbn ${fqbn} ${dir}`, (err2, stdout2, stderr2) => {
        if (err2) return console.error("❌ Erro no upload:\n", stderr2);
        console.log("🚀 Upload feito com sucesso!\n", stdout2);
      });
    });

  } catch (err) {
    console.error("❌ Erro ao buscar código:", err.message);
  }
}

// Verifica a cada 15 segundos
setInterval(buscarEEnviarCodigo, 15000);

const express = require("express");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public")); // onde está seu index.html

app.post("/enviar-codigo", (req, res) => {
    const { fileName, code } = req.body;
    const dir = path.join(__dirname, fileName.replace(".ino", ""));
  
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    const filePath = path.join(dir, fileName);
    fs.writeFileSync(filePath, code);
  
    exec(`arduino-cli compile --fqbn arduino:avr:uno ${dir}`, (err, stdout, stderr) => {
      if (err) {
        console.error("Erro na compilação:", stderr);
        return res.status(500).send(`Erro na compilação:\n${stderr}`);
      }
  
      exec(`arduino-cli upload -p /dev/ttyACM0 --fqbn arduino:avr:uno ${dir}`, (err2, stdout2, stderr2) => {
        if (err2) {
          console.error("Erro no upload:", stderr2);
          return res.status(500).send(`Erro no upload:\n${stderr2}`);
        }
  
        console.log("Upload feito com sucesso!");
        res.send(`Código enviado com sucesso!\n\n${stdout2}`);
      });
    });
  }); 

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

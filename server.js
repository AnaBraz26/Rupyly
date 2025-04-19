const express = require("express");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public")); // onde está seu index.html

app.post("/enviar-codigo", (req, res) => {
  const { fileName, code } = req.body;
  const dir = path.join(__dirname, fileName.replace(".ino", ""));

  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  const filePath = path.join(dir, fileName);
  fs.writeFileSync(filePath, code);

  exec(`arduino-cli compile --fqbn arduino:avr:uno ${dir}`, (err) => {
    if (err) return res.status(500).send("Erro na compilação.");

    exec(`arduino-cli upload -p /dev/ttyACM0 --fqbn arduino:avr:uno ${dir}`, (err2) => {
      if (err2) return res.status(500).send("Erro no upload.");
      res.send("Código enviado com sucesso!");
    });
  });
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

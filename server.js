const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

// Rota para enviar código ao Arduino
app.post("/upload", (req, res) => {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({ error: "Código inválido" });
    }

    // Salva o código em um arquivo .ino temporário
    const filePath = "./temp_code/temp_sketch.ino";
    fs.writeFileSync(filePath, code);

    // Comando para compilar e enviar o código
    const uploadCommand = `arduino-cli compile --fqbn arduino:avr:uno ${filePath} && arduino-cli upload -p COM3 --fqbn arduino:avr:uno ${filePath}`;

    exec(uploadCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao enviar código: ${stderr}`);
            return res.status(500).json({ error: "Falha no upload" });
        }
        res.json({ message: "Código enviado com sucesso!", output: stdout });
    });
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

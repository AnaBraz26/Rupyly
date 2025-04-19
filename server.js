const express = require("express");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public")); // frontend

app.post("/enviar-codigo", (req, res) => {
    const code = req.body.code;
    const fileBase = req.body.filename || "codigo_gerado";
    const fileName = fileBase + ".ino";
    const folderPath = path.join(__dirname, fileBase);

    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
    const filePath = path.join(folderPath, fileName);
    fs.writeFileSync(filePath, code);

    // Detectar placa
    exec("arduino-cli board list", (err, stdout, stderr) => {
        if (err) return res.json({ message: "Erro ao listar placas." });

        const match = stdout.match(/(\/dev\/tty\w+|COM\d+)\s+(\S+)/);
        if (!match) return res.json({ message: "Nenhuma placa encontrada." });

        let port = match[1];
        let fqbn = match[2] === "Unknown" ? "arduino:avr:uno" : match[2];

        // Compilar
        exec(`arduino-cli compile --fqbn ${fqbn} ${folderPath}`, (compErr, compOut, compStderr) => {
            if (compErr) return res.json({ message: "Erro na compilação." });

            // Enviar
            exec(`arduino-cli upload -p ${port} --fqbn ${fqbn} ${folderPath}`, (uploadErr, uploadOut, uploadStderr) => {
                if (uploadErr) return res.json({ message: "Erro ao enviar para o Arduino." });
                res.json({ message: "Código enviado com sucesso!" });
            });
        });
    });
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

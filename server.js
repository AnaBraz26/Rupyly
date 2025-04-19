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

    console.log(`Iniciando o processo de envio de código para: ${fileName}`);

    // Verifica se o diretório já existe e, se não, cria
    if (!fs.existsSync(dir)) {
        console.log(`Diretório não encontrado. Criando diretório: ${dir}`);
        fs.mkdirSync(dir);
    } else {
        console.log(`Diretório já existe: ${dir}`);
    }

    const filePath = path.join(dir, fileName);
    console.log(`Escrevendo código no arquivo: ${filePath}`);
    
    // Escreve o código no arquivo
    fs.writeFileSync(filePath, code);
    console.log("Código escrito no arquivo com sucesso!");

    // Compila o código
    console.log("Iniciando a compilação...");
    exec(`arduino-cli compile --fqbn arduino:avr:uno ${dir}`, (err, stdout, stderr) => {
        if (err) {
            console.error("Erro na compilação:", stderr);
            return res.status(500).send(`Erro na compilação:\n${stderr}`);
        }

        console.log("Compilação concluída com sucesso!\n" + stdout);

        // Realiza o upload para o Arduino
        console.log("Iniciando o upload para o Arduino...");
        exec(`arduino-cli upload -p /dev/ttyACM0 --fqbn arduino:avr:uno ${dir}`, (err2, stdout2, stderr2) => {
            if (err2) {
                console.error("Erro no upload:", stderr2);
                return res.status(500).send(`Erro no upload:\n${stderr2}`);
            }

            console.log("Upload feito com sucesso!");
            console.log("Saída do upload:\n", stdout2);
            res.send(`Código enviado com sucesso!\n\n${stdout2}`);
        });
    });
});


app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

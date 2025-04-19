// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
// const { exec } = require('child_process');

// const app = express();

// // Configuração do CORS para permitir todas as origens
// app.use(cors());

// // Middleware para lidar com o corpo da requisição (JSON)
// app.use(express.json());

// app.post("/enviar-codigo", (req, res) => {
//     const { fileName, code } = req.body;
//     const dir = path.join(__dirname, fileName.replace(".ino", ""));

//     console.log(`Iniciando o processo de envio de código para: ${fileName}`);

//     // Verifica se o diretório já existe e, se não, cria
//     if (!fs.existsSync(dir)) {
//         console.log(`Diretório não encontrado. Criando diretório: ${dir}`);
//         fs.mkdirSync(dir);
//     } else {
//         console.log(`Diretório já existe: ${dir}`);
//     }

//     const filePath = path.join(dir, fileName);
//     console.log(`Escrevendo código no arquivo: ${filePath}`);
    
//     // Escreve o código no arquivo
//     fs.writeFileSync(filePath, code);
//     console.log("Código escrito no arquivo com sucesso!");

//     // Compila o código
//     console.log("Iniciando a compilação...");
//     exec(`arduino-cli compile --fqbn arduino:avr:uno ${dir}`, (err, stdout, stderr) => {
//         if (err) {
//             console.error("Erro na compilação:", stderr);
//             return res.status(500).send(`Erro na compilação:\n${stderr}`);
//         }

//         console.log("Compilação concluída com sucesso!\n" + stdout);

//         // Realiza o upload para o Arduino
//         console.log("Iniciando o upload para o Arduino...");
//         exec(`arduino-cli upload -p /dev/ttyACM0 --fqbn arduino:avr:uno ${dir}`, (err2, stdout2, stderr2) => {
//             if (err2) {
//                 console.error("Erro no upload:", stderr2);
//                 return res.status(500).send(`Erro no upload:\n${stderr2}`);
//             }

//             console.log("Upload feito com sucesso!");
//             console.log("Saída do upload:\n", stdout2);
//             res.send(`Código enviado com sucesso!\n\n${stdout2}`);
//         });
//     });
// });

// // Inicia o servidor na porta 3000 (ou a porta que preferir)
// app.listen(3000, () => {
//     console.log("Servidor rodando na porta 3000");
// });

// server-render.js (roda no Render)
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let ultimoCodigo = ""; // variável que guarda o último código enviado

app.post("/salvar-codigo", (req, res) => {
  const { code } = req.body;
  ultimoCodigo = code;
  console.log("✅ Código recebido!");
  res.send("Código salvo com sucesso.");
});

app.get("/codigo", (req, res) => {
  if (!ultimoCodigo) return res.status(404).send("Nenhum código salvo.");
  res.send({ fileName: "sketch.ino", code: ultimoCodigo });
});

app.listen(3000, () => {
  console.log("🌐 Backend online ouvindo na porta 3000");
});



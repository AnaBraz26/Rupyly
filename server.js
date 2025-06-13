// server-render.js (roda no Render)
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let ultimoCodigo = ""; // variável que guarda o último código enviado

// app.post("/salvar-codigo", (req, res) => {
//   const { code } = req.body;
//   ultimoCodigo = code;
//   console.log("✅ Código recebido!");
//   res.send("Código salvo com sucesso.");
// });

app.post("/salvar-codigo", (req, res) => {
  const { code } = req.body;
  ultimoCodigo = code;

  // Resetar status do upload
  statusUpload = {
    sucesso: null,
    mensagem: "",
    timestamp: null
  };

  console.log("✅ Código recebido!");
  res.send("Código salvo com sucesso.");
});


app.get("/codigo", (req, res) => {
  if (!ultimoCodigo) return res.status(404).send("Nenhum código salvo.");
  res.send({ fileName: "sketch.ino", code: ultimoCodigo });
});

let statusUpload = {
  sucesso: null,
  mensagem: "",
  timestamp: null
};

// rota para receber o status do upload
app.post("/status-upload", (req, res) => {
  const { sucesso, mensagem } = req.body;
  statusUpload = {
    sucesso,
    mensagem,
    timestamp: new Date().toISOString(),
  };
  console.log("📥 Status do upload recebido:", statusUpload);
  res.send("Status recebido.");
});

// rota para consultar o status atual
app.get("/status-upload", (req, res) => {
  res.json(statusUpload);
});

app.listen(3000, () => {
  console.log("🌐 Backend online ouvindo na porta 3000");
});



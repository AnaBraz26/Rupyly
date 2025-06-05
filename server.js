-// server-render.js (roda no Render)
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



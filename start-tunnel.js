const { exec } = require("child_process");
const localtunnel = require("localtunnel");

async function startTunnel() {
  // 1. Iniciar o servidor
  console.log("🚀 Iniciando servidor local...");
  const server = exec("node server.js");

  server.stdout.on("data", (data) => {
    console.log(`[Server] ${data}`);
  });

  server.stderr.on("data", (data) => {
    console.error(`[Server Error] ${data}`);
  });

  // 2. Criar o túnel
  const tunnel = await localtunnel({ port: 3000, subdomain: "ereko-backend2" });

  console.log(`🌐 Tunnel ativo: ${tunnel.url}`);

  tunnel.on("close", () => {
    console.log("❌ Tunnel fechado.");
  });

  process.on("SIGINT", () => {
    console.log("\n🛑 Encerrando...");
    server.kill();
    tunnel.close();
    process.exit();
  });
}

startTunnel();

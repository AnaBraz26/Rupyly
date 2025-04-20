const { app, BrowserWindow } = require('electron');
const path = require('path');
const { exec } = require("child_process");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');  // Ou o caminho para seu arquivo HTML

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Aqui, você adiciona o código para rodar o local-client.js
function runLocalClient() {
  const child = exec("node local-client.js");

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

app.disableHardwareAcceleration();

app.whenReady().then(() => {
  createWindow();

  // Rodando o local-client.js após o Electron estar pronto
  runLocalClient();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


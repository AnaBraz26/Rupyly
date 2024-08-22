let port;

document.getElementById('connect').addEventListener('click', async () => {
  try {
    // Solicita ao usuário a seleção de uma porta serial
    port = await navigator.serial.requestPort();
    // Abre a conexão com a porta serial
    await port.open({ baudRate: 9600 });
    console.log('Conectado ao Arduino!');
  } catch (e) {
    console.error('Erro ao conectar:', e);
  }
});

document.getElementById('send').addEventListener('click', async () => {
  if (!port) {
    console.error('Nenhuma porta selecionada.');
    return;
  }

  try {
    // Cria um Writer para enviar dados
    const writer = port.writable.getWriter();
    // Envia um comando para o Arduino
    await writer.write(new TextEncoder().encode('A'));
    console.log('Comando enviado!');
    writer.releaseLock();
  } catch (e) {
    console.error('Erro ao enviar comando:', e);
  }
});

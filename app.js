let device;

    // Função para conectar ao Arduino
    document.getElementById('connect').addEventListener('click', async () => {
      try {
        device = await navigator.usb.requestDevice({ filters: [{ vendorId: 0x2341 }] }); // ID do Arduino
        await device.open(); // Abre o dispositivo
        await device.selectConfiguration(1); // Seleciona a configuração
        await device.claimInterface(2); // Interface de controle
        console.log('Conectado ao Arduino');
      } catch (error) {
        console.log('Erro ao conectar ao Arduino:', error);
      }
    });

    // Função para enviar o código digitado ao Arduino
    document.getElementById('enviarCodigo').addEventListener('click', async () => {
      if (device) {
        const codigo = document.getElementById('codigo').value;
        const encoder = new TextEncoder();
        const data = encoder.encode(codigo);
        await device.transferOut(4, data); // Envia o código ao endpoint 4
        console.log('Código enviado:', codigo);
      } else {
        console.log('Arduino não está conectado');
      }
    });
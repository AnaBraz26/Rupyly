// Definições
  
  Blockly.Blocks['setup'] = {
    init: function() {
      this.appendStatementInput("Void_setup")
          .setCheck(null)
          .appendField("Inicializador");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['loop'] = {
    init: function() {
      this.appendStatementInput("Void_loop")
          .setCheck(null)
          .appendField("Ciclo");
      this.setPreviousStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['led'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Led")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField("Porta")
          .appendField(new Blockly.FieldNumber(0), "Porta");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['digitalwrite_led'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Acionar Led")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField(new Blockly.FieldDropdown([["Ligar","HIGH"], ["Desligar","LOW"]]), "modo");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

    
  Blockly.Blocks['pinmode_led'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Configuração do Led")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField(new Blockly.FieldDropdown([["Saída","OUTPUT"], ["Entrada","INPUT"]]), "mode");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['buzzer'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Buzzer")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField("Porta")
          .appendField(new Blockly.FieldNumber(0), "Porta");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
    }
  };

  Blockly.Blocks['digitalwrite_buzzer'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Acionar Buzzer")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField(new Blockly.FieldDropdown([["Ligar","HIGH"], ["Desligar","LOW"]]), "modo");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['pinmode_buzzer'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Configuração do Buzzer")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField(new Blockly.FieldDropdown([["Saída","OUTPUT"], ["Entrada","INPUT"]]), "mode");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['delay'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Delay")
          .appendField(new Blockly.FieldNumber(200), "Delay");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['Biblioteca_Motor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Incluir biblioteca Motor");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['motor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Motor")
          .appendField(new Blockly.FieldTextInput("Nome"), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['motor_attach'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Porta do Motor")
          .appendField(new Blockly.FieldTextInput("Nome"), "NAME")
          .appendField(new Blockly.FieldNumber(0), "Porta");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['motor_write'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ângulo para mover o Motor")
          .appendField(new Blockly.FieldTextInput("Nome"), "NAME")
          .appendField(new Blockly.FieldNumber(0), "Ângulo");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['SoftwareSerial'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Incluir biblioteca SoftwareSerial");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(400);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['software'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("SerialSoftware")
          .appendField(new Blockly.FieldTextInput("nome"), "NAME")
          .appendField("Receber dados")
          .appendField(new Blockly.FieldNumber(0), "rxPin")
          .appendField("Transmitir dados")
          .appendField(new Blockly.FieldNumber(0), "txPin");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['byte'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Byte")
          .appendField(new Blockly.FieldTextInput("nome"), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['int'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Int")
          .appendField(new Blockly.FieldTextInput("nome"), "NAME")
          .appendField("=")
          .appendField(new Blockly.FieldNumber(0), "int");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['namebegin'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Velocidade do Serial")
          .appendField(new Blockly.FieldTextInput("nome"), "NAME")
          .appendField(new Blockly.FieldNumber(9600), "begin");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['serialbegin'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Velocidade da comunicação serial")
          .appendField(new Blockly.FieldNumber(9600), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['if'] = {
    init: function() {
      this.appendStatementInput("IF")
          .setCheck(null)
          .appendField("Se")
          .appendField(new Blockly.FieldTextInput("condição"), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['analogwrite'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Analog Write")
          .appendField(new Blockly.FieldTextInput("pino,valor"), "nome")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['map'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("map")
          .appendField(new Blockly.FieldTextInput("valor"), "valor")
          .appendField(new Blockly.FieldTextInput("deMenor"), "deMenor")
          .appendField(new Blockly.FieldTextInput("deMaior"), " deMaior")
          .appendField(new Blockly.FieldTextInput("paraMenor"), "paraMenor")
          .appendField(new Blockly.FieldTextInput("paraMaior"), "paraMaior");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['serialprint'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Escrever no serial: ")
          .appendField(new Blockly.FieldTextInput("input"), "text");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['serialprintln'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Escrever no serial:")
          .appendField(new Blockly.FieldTextInput("input"), "text")
          .appendField("e pular linha")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['igualdade'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("variavel"), "NAME")
          .appendField("=")
          .appendField(new Blockly.FieldTextInput("input"), "text");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['quadrado'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fazer um quadrado de")
          .appendField(new Blockly.FieldNumber(0), "valor")
          .appendField("cm");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['circulo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fazer um circulo de")
          .appendField(new Blockly.FieldNumber(0), "valor")
          .appendField("cm");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['triangulo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fazer um triângulo de")
          .appendField(new Blockly.FieldNumber(0), "valor")
          .appendField("cm");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
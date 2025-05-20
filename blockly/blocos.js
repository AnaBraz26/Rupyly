// Definições
  
  Blockly.Blocks['setup'] = {
    init: function() {
      this.appendStatementInput("Void_setup")
          .setCheck(null)
          .appendField("Inicializador");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Código que roda uma vez ao iniciar");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/estruturas/sketch/setup/");
    }
  };
  
  Blockly.Blocks['loop'] = {
    init: function() {
      this.appendStatementInput("Void_loop")
          .setCheck(null)
          .appendField("Ciclo");
      this.setPreviousStatement(true, null);
      this.setColour(0);
   this.setTooltip("Código que roda continuamente");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/estruturas/sketch/loop/");
    }
  };

  Blockly.Blocks['funcao'] = {
    init: function() {
      this.appendStatementInput('void')
        .setCheck(null)
        .appendField('Função')
        .appendField(new Blockly.FieldTextInput('nome'), 'nome');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("Bloco para geração de função");
      this.setHelpUrl('');
      this.setColour(240);
    }
  };
                      
  Blockly.Blocks['chamada']= {
    init: function() {
      this.appendStatementInput('void')
        .appendField('Chamar a Função')
        .appendField(new Blockly.FieldTextInput('nome'), 'nome');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("Chama uma função criada");
      this.setHelpUrl('');
      this.setColour(120);
    }
  };                
  
  Blockly.Blocks['texto']= {
    init: function() {
      this.appendDummyInput('void')
        .appendField(new Blockly.FieldTextInput('nome'), 'nome');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("Bloco para texto");
      this.setHelpUrl('');
      this.setColour(0);
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
   this.setTooltip("Declara a porta em que o Led será ligado");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/vari%C3%A1veis/data-types/int/");
    }
  };

  Blockly.Blocks['digitalwrite'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Aciona alguma coisa")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField(new Blockly.FieldDropdown([["Ligar","HIGH"], ["Desligar","LOW"]]), "modo");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("Aciona um valor HIGH ou LOW");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/digitalwrite/");
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
   this.setTooltip("Aciona um valor HIGH ou LOW para o Led");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/digitalwrite/");
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
   this.setTooltip("Configura o led para funcionar como uma entrada ou saída");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/pinMode/");
    }
  };

  Blockly.Blocks['pinmode'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Configuração do pino")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField(new Blockly.FieldDropdown([["Saída","OUTPUT"], ["Entrada","INPUT"]]), "mode");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("Configura o pino para funcionar como uma entrada ou saída");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/pinMode/");
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
   this.setTooltip("Declara a porta em que o Buzzer será ligado");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/vari%C3%A1veis/data-types/int/");
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
   this.setTooltip("Aciona um valor HIGH ou LOW para o Buzzer");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/digitalwrite/");
    }
  };
  
  Blockly.Blocks['digitalwrite'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Acionar Pino")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField(new Blockly.FieldDropdown([["Ligar","HIGH"], ["Desligar","LOW"]]), "modo");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("Aciona um valor HIGH ou LOW para o pino");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/digitalwrite/");
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
   this.setTooltip("Configura o Buzzer para funcionar como uma entrada ou saída");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/pinMode/");
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
   this.setTooltip("Pausa o programa por certo tempo em milissegundos");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/time/delay/");
    }
  };

  Blockly.Blocks['Biblioteca_Motor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Incluir biblioteca Motor");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("Inclui a biblioteca do servomotor");
   this.setHelpUrl("https://docs.arduino.cc/libraries/servo/");
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
   this.setTooltip("Declara o servomotor");
   this.setHelpUrl("https://docs.arduino.cc/libraries/servo/");
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
   this.setTooltip("Declara em qual porta o servomotor será ligado");
   this.setHelpUrl("https://docs.arduino.cc/libraries/servo/");
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
   this.setTooltip("Colocar o valor, em graus, que o motor irá mexer");
   this.setHelpUrl("https://docs.arduino.cc/libraries/servo/");
    }
  };

  Blockly.Blocks['SoftwareSerial'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Incluir biblioteca SoftwareSerial");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(400);
   this.setTooltip("Incluí a biblioteca SoftwareSerial");
   this.setHelpUrl("https://docs.arduino.cc/learn/built-in-libraries/software-serial/");
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
   this.setTooltip("Cria uma instância de um objeto SoftwareSerial");
   this.setHelpUrl("https://docs.arduino.cc/learn/built-in-libraries/software-serial/#softwareserial");
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
   this.setTooltip("Declara uma varível como um byte");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/en/variables/data-types/byte/");
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
   this.setTooltip("Declara uma variável inteira");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/vari%C3%A1veis/data-types/int/");
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
   this.setTooltip("Coloca a velocidade para uma variável");
   this.setHelpUrl("https://docs.arduino.cc/learn/built-in-libraries/software-serial/#begin");
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
   this.setTooltip("Coloca a velocidade para comunicação serial");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/en/functions/communication/serial/begin/");
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
   this.setTooltip("Verifica se é válido a condição e executa o comando a seguir");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/estruturas/control-structure/if/");
    }
  };

  
  Blockly.Blocks['analogwrite'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Acionar onda PWM em")
          .appendField(new Blockly.FieldTextInput("pino"), "nome")          
          .appendField(new Blockly.FieldTextInput("valor"), "valor")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("Aciona uma onda PWM em um pino");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/analog-io/analogWrite/");
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
   this.setTooltip("Remapeia um número de um intervalo para outro");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/math/map/");
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
   this.setTooltip("Imprime dados no pino de transmissão do objeto SoftwareSerial");
   this.setHelpUrl("https://docs.arduino.cc/learn/built-in-libraries/software-serial/#print");
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
   this.setTooltip("Imprime dados no pino de transmissão do objeto SoftwareSerial com pulo de linha ao final");
   this.setHelpUrl("https://docs.arduino.cc/learn/built-in-libraries/software-serial/#println");
    }
  };

  
  // Blockly.Blocks['igualdade'] = {
  //   init: function() {
  //     this.appendDummyInput()
  //         .appendField(new Blockly.FieldTextInput("variavel"), "NAME")
  //         .appendField("==")
  //         .appendField(new Blockly.FieldTextInput("input"), "text");
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setColour(255);
  //  this.setTooltip("Verifica se valor de uma varível é igual a outra");
  //  this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/estruturas/comparison-operators/equalTo/");
  //   }
  // };

  Blockly.Blocks['atribuicao'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("variavel"), "NAME")
          .appendField("=")
          .appendField(new Blockly.FieldTextInput("input"), "text");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(200);
   this.setTooltip("Atribuição de algum valor a váriavel");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/estruturas/arithmetic-operators/assignment/");
    }
  };
  
  
  Blockly.Blocks['quadrado'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fazer um quadrado")
          .appendField(new Blockly.FieldNumber(0), "valor")
      this.setColour(230);
   this.setTooltip("Esse bloco faz com que o carrinho ande em quadrado");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['circulo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fazer um circulo ")
          .appendField(new Blockly.FieldNumber(0), "valor")
      this.setColour(230);
   this.setTooltip("Esse bloco faz com que o carrinho ande em círculo");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['triangulo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fazer um triângulo")
          .appendField(new Blockly.FieldNumber(0), "valor")
      this.setColour(230);
   this.setTooltip("Esse bloco faz com que o carrinho ande em triângulo");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['reto'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Andar somente para frente")
          .appendField(new Blockly.FieldNumber(0), "valor")
      this.setColour(230);
   this.setTooltip("Esse bloco faz com que o carrinho ande somente para frente");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['atras'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Andar somente para trás")
          .appendField(new Blockly.FieldNumber(0), "valor")
      this.setColour(230);
   this.setTooltip("Esse bloco faz com que o carrinho ande somente para trás");
   this.setHelpUrl("");
    }
  };
// Definições
  
  Blockly.Blocks['setup'] = {
    init: function() {
      this.appendStatementInput("Void_setup")
          .setCheck(null)
          .appendField("Inicializador");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Esse bloco inicializa os componentes do seu circuito");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/estruturas/sketch/setup/");
    }
  };
  
  Blockly.Blocks['loop'] = {
    init: function() {
      this.appendStatementInput("Void_loop")
          .setCheck(null)
          .appendField("Ciclo");
      this.setPreviousStatement(true, null);      
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Esse bloco faz com que as ações dos seus componentes sejam contínuos");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/estruturas/sketch/loop/");
    }
  };

  Blockly.Blocks['funcao'] = {
    init: function() {
      this.appendStatementInput('void')
        .setCheck(null)
        .appendField('Função')
        .appendField(new Blockly.FieldTextInput('nome'), 'nome')       
        .appendField('passando valores')
        .appendField(new Blockly.FieldTextInput(''), 'argumento'); 
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("Bloco para geração de função");
      this.setHelpUrl('');
      this.setColour(40);
    }
  };
                      
  Blockly.Blocks['chamada']= {
    init: function() {
      this.appendStatementInput('void')
        .appendField('Chamar a Função')
        .appendField(new Blockly.FieldTextInput('nome'), 'nome')
        .appendField('passando valores')
        .appendField(new Blockly.FieldTextInput(''), 'argumento'); 
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("Chama uma função criada");
      this.setHelpUrl('');
      this.setColour(40);
    }
  };                
  
  Blockly.Blocks['texto']= {
    init: function() {
      this.appendDummyInput('void')
        .appendField('Comentar')
        .appendField(new Blockly.FieldTextInput('texto'), 'nome');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("Com esse bloco é possível colocar comentários no seu código");
      this.setHelpUrl('');
      this.setColour(0);
    }
  };                   
  
  Blockly.Blocks['led'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Led")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField("conectado na porta")
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
          .appendField("Fazer o componente")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField(new Blockly.FieldDropdown([["Ligar","HIGH"], ["Desligar","LOW"]]), "modo");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("Aciona um valor HIGH (ligado) ou LOW (desligado) para o componente");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/digitalwrite/");
    }
  };
  
  Blockly.Blocks['digitalwrite_led'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fazer o Led")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField(new Blockly.FieldDropdown([["Ligar","HIGH"], ["Desligar","LOW"]]), "modo");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("Aciona um valor HIGH (ligado) ou LOW (desligado) para o Led");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/digitalwrite/");
    }
  };

    
  Blockly.Blocks['pinmode_led'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Configurar o Led")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome");
          // .appendField(new Blockly.FieldDropdown([["Saída","OUTPUT"], ["Entrada","INPUT"]]), "mode");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("Configura o led para funcionar como uma saída");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/pinMode/");
    }
  };

  Blockly.Blocks['pinmode'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Configurar o componente")
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
          .appendField("conectado na porta")
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
          .appendField("Fazer o Buzzer")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          .appendField(new Blockly.FieldDropdown([["Ligar","HIGH"], ["Desligar","LOW"]]), "modo");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("Aciona um valor HIGH (lidado) ou LOW (desligado) para o Buzzer");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/digitalwrite/");
    }
  };
  
  // Blockly.Blocks['digitalwrite'] = {
  //   init: function() {
  //     this.appendDummyInput()
  //         .appendField("Acionar Pino")
  //         .appendField(new Blockly.FieldTextInput("Nome"), "nome")
  //         .appendField(new Blockly.FieldDropdown([["Ligar","HIGH"], ["Desligar","LOW"]]), "modo");
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setColour(60);
  //  this.setTooltip("Aciona um valor HIGH ou LOW para o pino");
  //  this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/digitalwrite/");
  //   }
  // };
  
  Blockly.Blocks['pinmode_buzzer'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Configurar o buzzer")
          .appendField(new Blockly.FieldTextInput("Nome"), "nome")
          // .appendField(new Blockly.FieldDropdown([["Saída","OUTPUT"], ["Entrada","INPUT"]]), "mode");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("Configura o Buzzer para funcionar como uma saída");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/digital-io/pinMode/");
    }
  };
  
  Blockly.Blocks['delay'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Pausar o programa")
          .appendField(new Blockly.FieldNumber(2000), "Delay");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Pausa o programa por certo tempo em milissegundos. 1000ms = 1s");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/time/delay/");
    }
  };

  Blockly.Blocks['Biblioteca_Motor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Incluir biblioteca do Servo");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("Inclui a biblioteca do servo para o funcionamento do motor");
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
   this.setTooltip("Declara o motor que irá utilizar a biblioteca do Servo");
   this.setHelpUrl("https://docs.arduino.cc/libraries/servo/");
    }
  };

  Blockly.Blocks['motor_attach'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Motor")
          .appendField(new Blockly.FieldTextInput("Nome"), "NAME")
          .appendField("conectado na porta")
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
          .appendField("Movimentar o motor")
          .appendField(new Blockly.FieldTextInput("Nome"), "NAME")          
          .appendField("em")
          .appendField(new Blockly.FieldNumber(0), "valor")
          .appendField("graus");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("Colocar o valor, entre 0 e 180º graus, que o motor irá mexer");
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
          .appendField("SoftwareSerial")
          .appendField(new Blockly.FieldTextInput("nome"), "NAME")
          .appendField("Recebe dados de")
          .appendField(new Blockly.FieldNumber(0), "rxPin")
          .appendField("Transmite dados de")
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
          .appendField("Declara uma variável byte")
          .appendField(new Blockly.FieldTextInput("nome"), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(900);
   this.setTooltip("Declara uma varível como um byte");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/en/variables/data-types/byte/");
    }
  };

  Blockly.Blocks['int'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Declarar uma variável inteira")
          .appendField(new Blockly.FieldTextInput("nome"), "NAME")
          .appendField("=")
          .appendField(new Blockly.FieldNumber(0), "int");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(900);
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
      this.setColour(0);
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
          .appendField(new Blockly.FieldTextInput("condição"), "NAME")
          .appendField("acontecer");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("Verifica se é válido a condição e executa o comando a seguir");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/estruturas/control-structure/if/");
    }
  };

  Blockly.Blocks['else'] = {
    init: function() {
      this.appendStatementInput("IF")
          .setCheck(null)
          .appendField("Senão acontecer")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("Se a condição não é válida, então executa o comando a seguir");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/estruturas/control-structure/if/");
    }
  };


  
  Blockly.Blocks['analogwrite'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Acionar onda PWM no componente ")
          .appendField(new Blockly.FieldTextInput("pino"), "nome")             
          .appendField("com")       
          .appendField(new Blockly.FieldTextInput("valor"), "valor")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("Aciona uma onda PWM em um componente");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/analog-io/analogWrite/");
    }
  };
  
  // Blockly.Blocks['map'] = {
  //   init: function() {
  //     this.appendDummyInput()
  //         .appendField("map")
  //         .appendField(new Blockly.FieldTextInput("valor"), "valor")
  //         .appendField(new Blockly.FieldTextInput("deMenor"), "deMenor")
  //         .appendField(new Blockly.FieldTextInput("deMaior"), " deMaior")
  //         .appendField(new Blockly.FieldTextInput("paraMenor"), "paraMenor")
  //         .appendField(new Blockly.FieldTextInput("paraMaior"), "paraMaior");
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setColour(255);
  //  this.setTooltip("Remapeia um número de um intervalo para outro");
  //  this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/fun%C3%A7%C3%B5es/math/map/");
  //   }
  // };
  
  Blockly.Blocks['serialprint'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Escrever no tela: ")
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
          .appendField("Escrever no tela:")
          .appendField(new Blockly.FieldTextInput("input"), "text")
          .appendField("e pula linha")
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
          .appendField("Atribuir a uma ")
          .appendField(new Blockly.FieldTextInput("variavel"), "NAME")
          .appendField("um")
          .appendField(new Blockly.FieldTextInput("texto"), "text");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(900);
   this.setTooltip("Atribuição de algum valor a váriavel");
   this.setHelpUrl("https://docs.arduino.cc/language-reference/pt/estruturas/arithmetic-operators/assignment/");
    }
  };
  
  
  Blockly.Blocks['quadrado'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Andar no formato de um quadrado")
          // .appendField(new Blockly.FieldNumber(0), "valor")
      this.setColour(230);
   this.setTooltip("Esse bloco cria um circuito completo para que o arabeko anda no formato de um quadrado");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['circulo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Andar no formato de um círculo")
          // .appendField(new Blockly.FieldNumber(0), "valor")
      this.setColour(230);
   this.setTooltip("Esse bloco cria um circuito completo para que o arabeko anda no formato de um círculo");
   this.setHelpUrl("");
    }
  };

  // Blockly.Blocks['triangulo'] = {
  //   init: function() {
  //     this.appendDummyInput()
  //         .appendField("Fazer um triângulo")
  //         .appendField(new Blockly.FieldNumber(0), "valor")
  //     this.setColour(230);
  //  this.setTooltip("Esse bloco faz com que o carrinho ande em triângulo");
  //  this.setHelpUrl("");
  //   }
  // };

  Blockly.Blocks['reto'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Andar somente para frente")
          // .appendField(new Blockly.FieldNumber(0), "valor")
      this.setColour(230);
   this.setTooltip("Esse bloco cria um circuito completo para que o arabeko ande somente para frente");
   this.setHelpUrl("");
    }
  };

  // Blockly.Blocks['atras'] = {
  //   init: function() {
  //     this.appendDummyInput()
  //         .appendField("Andar somente para trás")
  //         .appendField(new Blockly.FieldNumber(0), "valor")
  //     this.setColour(230);
  //  this.setTooltip("Esse bloco faz com que o carrinho ande somente para trás");
  //  this.setHelpUrl("");
  //   }
  // };
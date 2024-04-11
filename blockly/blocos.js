// Definições

Blockly.Blocks['ativar_led'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ativar Leds");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['setup'] = {
    init: function() {
      this.appendStatementInput("Void_setup")
          .setCheck(null)
          .appendField("SETUP");
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
          .appendField("LOOP");
      this.setPreviousStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['led'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("led")
          .appendField(new Blockly.FieldTextInput("nome"), "nome")
          .appendField("porta")
          .appendField(new Blockly.FieldNumber(0), "porta");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['digitalwrite'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("Digital Write")
          .appendField(new Blockly.FieldTextInput("nome"), "nome")
          .appendField(new Blockly.FieldDropdown([["HIGH","HIGH"], ["LOW","LOW"]]), "modo");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['pinmode'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pinMode")
          .appendField(new Blockly.FieldTextInput("nome"), "nome")
          .appendField(new Blockly.FieldDropdown([["OUTPUT","OUTPUT"], ["INPUT","INPUT"]]), "mode");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['delay'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("Delay")
          .appendField(new Blockly.FieldNumber(200), "Delay");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['buzzer'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("buzzer")
          .appendField(new Blockly.FieldTextInput("nome"), "nome")
          .appendField("porta")
          .appendField(new Blockly.FieldNumber(0), "porta");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
    }
  };

  Blockly.Blocks['Motor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Motor");
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
          .appendField("motor")
          .appendField(new Blockly.FieldTextInput("nome"), "NAME");
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
          .appendField("porta do motor")
          .appendField(new Blockly.FieldTextInput("nome"), "NAME")
          .appendField(new Blockly.FieldNumber(0), "porta");
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
          .appendField("motor")
          .appendField(new Blockly.FieldTextInput("nome"), "NAME")
          .appendField("write")
          .appendField(new Blockly.FieldNumber(0), "valor");
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
          .appendField("SoftwareSerial");
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
          .appendField(":")
          .appendField("rxPin")
          .appendField(new Blockly.FieldNumber(0), "rxPin")
          .appendField("txPin")
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
          .appendField(new Blockly.FieldTextInput("nome"), "NAME")

          .appendField("begin")
          .appendField(new Blockly.FieldNumber(0), "begin");
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
          .appendField("Serial.Begin")
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
          .appendField("if")
          .appendField(new Blockly.FieldTextInput("condição"), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
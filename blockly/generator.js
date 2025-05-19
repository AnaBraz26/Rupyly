// ----------------------------------------------------------------------------------------------------------------
//Generator in Arduino

Blockly.Arduino['setup'] = function(block) {
  var statements_name = Blockly.Arduino.statementToCode(block, 'Void_setup');
  var code = "void setup(){\n" +statements_name+ "\n}\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};

Blockly.Arduino['loop'] = function(block) {
  var statements_name = Blockly.Arduino.statementToCode(block, 'Void_loop');
  var code = "void loop(){\n" + statements_name +"\n}\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};

Blockly.Arduino['funcao'] = function(block) {
  var statements_name = Blockly.Arduino.statementToCode(block, 'void');  
  var text_name = block.getFieldValue('nome');
  var code = "void "+ text_name+"(){\n" +statements_name+ "\n}\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};

Blockly.Arduino['chamada'] = function(block) {
  var statements_name = Blockly.Arduino.statementToCode(block, 'void');  
  var text_name = block.getFieldValue('nome');
  var code = text_name+"("+statements_name+");\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};

Blockly.Arduino['texto'] = function(block) {
  var text_name = block.getFieldValue('nome');
  var code = text_name+"  ";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};

Blockly.Arduino['led'] = function(block) {
  var text_nome = block.getFieldValue('nome');
  var number_porta = block.getFieldValue('Porta');
  var code = "int led"+text_nome+" = "+number_porta+";\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};

Blockly.Arduino['pinmode_led'] = function(block, C) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('mode');
  var code = "pinMode(led"+text_nome+","+dropdown_modo+");\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};

Blockly.Arduino['pinmode'] = function(block, C) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('mode');
  var code = "pinMode("+text_nome+","+dropdown_modo+");\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};

Blockly.Arduino['digitalwrite_led'] = function(block) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('modo');
  var code = "digitalWrite(led"+text_nome+","+dropdown_modo+");\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};

Blockly.Arduino['digitalwrite'] = function(block) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('modo');
  var code = "digitalWrite("+text_nome+","+dropdown_modo+");\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};

Blockly.Arduino['digitalwrite'] = function(block) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('modo');
  var code = "digitalWrite("+text_nome+","+dropdown_modo+");\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};


Blockly.Arduino['buzzer'] = function(block) {
  var text_nome = block.getFieldValue('nome');
  var number_porta = block.getFieldValue('Porta');
  var code = "int buzzer"+text_nome+" = "+number_porta+";\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};


Blockly.Arduino['pinmode_buzzer'] = function(block) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('mode');
  var code = "pinMode(buzzer"+text_nome+","+dropdown_modo+");\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};


Blockly.Arduino['digitalwrite_buzzer'] = function(block) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('modo');
  var code = "digitalWrite(buzzer"+text_nome+","+dropdown_modo+");\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};

Blockly.Arduino['delay'] = function(block) {
  var number_delay = block.getFieldValue('Delay');
  var code =  "delay("+number_delay+");\n";
  code += Blockly.Arduino.blockToCode(block.getNextBlock());
  return code;
};


Blockly.Arduino['Biblioteca_Motor'] = function(block) {
    var code = "#include <Servo.h>\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['motor'] = function(block) {
    var text_name = block.getFieldValue('NAME');  
    var code = "Servo motor"+text_name+";\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['motor_attach'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var number_porta = block.getFieldValue('porta');  
    var code = "motor"+text_name+".attach("+number_porta+");\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['motor_write'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var number_valor = block.getFieldValue('valor');  
    var code = "motor"+text_name+".write("+number_valor+");\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['SoftwareSerial'] = function(block) {  
    var code = "#include <SoftwareSerial.h>\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };
  
  Blockly.Arduino['software'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var number_rxpin = block.getFieldValue('rxPin');
    var number_txpin = block.getFieldValue('txPin');
    var code = "SoftwareSerial "+text_name+"("+number_rxpin+","+number_txpin+");\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['byte'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var code = "byte "+text_name+";\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };
 
  Blockly.Arduino['int'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var number_int = block.getFieldValue('int');  
    var code = "int "+text_name+" = "+number_int+";\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['namebegin'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var number_begin = block.getFieldValue('begin');
    var code = text_name+".begin("+number_begin+");\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['serialbegin'] = function(block) {
    var number_name = block.getFieldValue('NAME');  
    var code = "Serial.begin("+number_name+");\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };
  
  Blockly.Arduino['if'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var statements_name = Blockly.Arduino.statementToCode(block, 'IF');  
    var code = "if("+text_name+"){\n "+statements_name+"\n}\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };
  
  Blockly.Arduino['serialprint'] = function(block) {
    var text_text = block.getFieldValue('text');  
    var code = "Serial.print("+text_text+");\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['analogwrite'] = function(block) {
    var text_nome = block.getFieldValue('nome');
    var text_valor = block.getFieldValue('valor');
    var code = "analogWrite("+text_nome+", "+text_valor+");\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['map'] = function(block) {
    var text_valor = block.getFieldValue('valor');
    var text_demenor = block.getFieldValue('deMenor');
    var text_demaior = block.getFieldValue('deMaior');
    var text_paramenor = block.getFieldValue('paraMenor');
    var text_paramaior = block.getFieldValue('paraMaior');  
    var code = "map(("+text_valor+"), "+text_demenor+", "+text_demaior+", "+text_paramenor+", "+text_paramaior+");\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['serialprintln'] = function(block) {
    var text_text = block.getFieldValue('text');  
    var code = "Serial.println("+text_text+");\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['igualdade'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var text_text = block.getFieldValue('text');  
    var code = text_name+"=="+text_text;
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['atribuicao'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var text_text = block.getFieldValue('text');  
    var code = text_name+" = "+text_text+"\n";
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['quadrado'] = function(block) {
    var number_valor = block.getFieldValue('valor');
    var code = '...\n';
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['circulo'] = function(block) {
    var number_valor = block.getFieldValue('valor');
    var code = '...\n';
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['triangulo'] = function(block) {
    var number_valor = block.getFieldValue('valor');
    var code = '...\n';
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };
  
  Blockly.Arduino['reto'] = function(block) {
    var number_valor = block.getFieldValue('valor');
    var code = '...\n';
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };

  Blockly.Arduino['atras'] = function(block) {
    var number_valor = block.getFieldValue('valor');
    var code = '...\n';
    code += Blockly.Arduino.blockToCode(block.getNextBlock());
    return code;
  };


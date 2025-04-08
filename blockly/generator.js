
//----------------------------------------------------------------------------------------------------------------
// Generator

Blockly.C = Object.create(Blockly.Generator.prototype);
Blockly.C.name = 'C';

// Blockly.JavaScript['setup'] = function(block, generator) {
//   var statements_name = Blockly.JavaScript.statementToCode(block, 'Void_setup');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '<br><br><font color="#00979c">void</font> <font color="#5e6d03">setup</font><font color="#000000">(</font><font color="#000000">)</font><br><font color="#000000">{</font>&nbsp;'+statements_name+'<br><font color="#000000">}</font>';
//     return code;
// };

// Blockly.JavaScript['loop'] = function(block, generator) {
//   var statements_name = Blockly.JavaScript.statementToCode(block, 'Void_loop');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '<br><br><font color="#00979c">void</font> <font color="#5e6d03">loop</font><font color="#000000">(</font><font color="#000000">)</font><br><font color="#000000">{</font>&nbsp;'+statements_name+'<br><font color="#000000">}</font>';
//     return code;
// };


Blockly.C['setup'] = function(block) {
  var statements_name = Blockly.C.statementToCode(block, 'Void_setup');
  //var code = '<br><br><font color="#00979c">void</font> <font color="#5e6d03">setup</font><font color="#000000">(</font><font color="#000000">)</font><br><font color="#000000">{</font>&nbsp;'+statements_name+'<br><font color="#000000">}</font>';
  return "void setup(){\n" +statements_name+ "\n}";
};

Blockly.C['loop'] = function(block) {
  var statements_name = Blockly.C.statementToCode(block, 'Void_loop');
  //var code = '<br><br><font color="#00979c">void</font> <font color="#5e6d03">loop</font><font color="#000000">(</font><font color="#000000">)</font><br><font color="#000000">{</font>&nbsp;'+statements_name+'<br><font color="#000000">}</font>';
    return "void loop(){\n" + statements_name +"\n}";
};

Blockly.C['led'] = function(block) {
  var text_nome = block.getFieldValue('nome');
  var number_porta = block.getFieldValue('Porta');
  //var code = '<br><font color="#00979c">int </font><font color="#000000">led'+ text_nome +'</font><font color="#434f54"> =</font> <font color="#000000">'+number_porta+'</font><font color="#000000">;</font>';
  return "int led"+text_nome+" = "+number_porta+";";
};

Blockly.C['pinmode_led'] = function(block, C) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('mode');
  //var code = '<br>&nbsp;<font color="#d35400">pinMode</font><font color="#000000">(</font><font color="#000000">'+text_nome+'</font><font color="#434f54">,</font> <font color="#00979c">'+dropdown_modo+'</font><font color="#000000">)</font><font color="#000000">;</font>';
  return "pinMode(led"+text_nome+","+dropdown_modo+");";
};

Blockly.C['digitalwrite_led'] = function(block) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('modo');
  //var code = '<br>&nbsp;<font color="#d35400">digitalWrite</font><font color="#000000">(</font><font color="#000000">'+text_nome+'</font><font color="#434f54">,</font><font color="#00979c">'+dropdown_modo+'</font><font color="#000000">)</font><font color="#000000">;</font>';
  return "digitalWrite(led"+text_nome+","+dropdown_modo+");";
};

Blockly.C['buzzer'] = function(block) {
  var text_nome = block.getFieldValue('nome');
  var number_porta = block.getFieldValue('Porta');
  //var code = '<br><font color="#00979c">int </font><font color="#000000">buzzer'+ text_nome +'</font><font color="#434f54"> =</font> <font color="#000000">'+number_porta+'</font><font color="#000000">;</font>';
  return "int buzzer"+text_nome+" = "+number_porta+";";
};


Blockly.C['pinmode_buzzer'] = function(block) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('mode');
  //var code = '<br>&nbsp;<font color="#d35400">pinMode</font><font color="#000000">(</font><font color="#000000">'+text_nome+'</font><font color="#434f54">,</font> <font color="#00979c">'+dropdown_modo+'</font><font color="#000000">)</font><font color="#000000">;</font>';
  return "pinMode(buzzer"+text_nome+","+dropdown_modo+");";
};


Blockly.C['digitalwrite_buzzer'] = function(block) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('modo');
  //var code = '<br>&nbsp;<font color="#d35400">digitalWrite</font><font color="#000000">(</font><font color="#000000">'+text_nome+'</font><font color="#434f54">,</font><font color="#00979c">'+dropdown_modo+'</font><font color="#000000">)</font><font color="#000000">;</font>';
  return "digitalWrite(buzzer"+text_nome+","+dropdown_modo+");";
};

Blockly.C['delay'] = function(block) {
  var number_delay = block.getFieldValue('Delay');
  //var code = '<br>&nbsp;<font color="#d35400">delay</font><font color="#000000">(</font><font color="#000000">'+number_delay+'</font><font color="#000000">)</font><font color="#000000">;</font>';
  return "delay("+number_delay+");";
};


Blockly.C['Biblioteca_Motor'] = function(block) {
    //var code = '<br><font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><b><font color="#d35400">Servo</font></b><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>';
    return "#include <Servo.h>";
  };

  Blockly.C['motor'] = function(block) {
    var text_name = block.getFieldValue('NAME');  
    //var code = '<br><font color="#d35400">Servo</font></b> <font color="#000000">motor'+text_name+'</font><font color="#000000">;</font>';
    return "Servo motor"+text_name+";";
  };

  Blockly.C['motor_attach'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var number_porta = block.getFieldValue('porta');  
    //var code = '<br>&nbsp;<font color="#000000">motor'+text_name+'</font><font color="#434f54">.</font><font color="#d35400">attach</font><font color="#000000">(</font><font color="#000000">'+number_porta+'</font><font color="#000000">)</font>';
    return "motor"+text_name+".attach("+number_porta+");";
  };

  Blockly.C['motor_write'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var number_valor = block.getFieldValue('valor');  
    //var code = '<br>&nbsp;<font color="#000000">motor'+text_name+'</font><font color="#434f54">.</font><font color="#d35400">write</font><font color="#000000">(</font><font color="#000000">'+number_valor+'</font><font color="#000000">)</font><font color="#000000">;</font>';
    return "motor"+text_name+".write("+number_valor+");";
  };

  Blockly.C['SoftwareSerial'] = function(block) {  
    //var code = '<br><font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><b><font color="#d35400">SoftwareSerial</font></b><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>';
    return "#include <SoftwareSerial.h>";
  };
  
  Blockly.C['software'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var number_rxpin = block.getFieldValue('rxPin');
    var number_txpin = block.getFieldValue('txPin');
    //var code = '<br><font color="#d35400">SoftwareSerial</font></b> <font color="#000000">'+text_name+'</font><font color="#000000">(</font><font color="#000000">'+number_rxpin+'</font><font color="#434f54">,</font> <font color="#000000">'+number_txpin+'</font><font color="#000000">)</font><font color="#000000">;</font>';
    return "SoftwareSerial "+text_name+"("+number_rxpin+","+number_txpin+");";
  };

  Blockly.C['byte'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    //var code = '<br><font color="#00979c">byte</font> <font color="#000000">'+text_name+'</font><font color="#000000">;</font>';
    return "byte "+text_name+";";
  };
 
  Blockly.C['int'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var number_int = block.getFieldValue('int');  
    //var code = '<br><font color="#00979c">int</font> <font color="#000000">'+text_name+'</font> <font color="#434f54">=</font> <font color="#000000">'+number_int+'</font><font color="#000000">;</font> ';
    return "int "+text_name+" = "+number_int+";";
  };

  Blockly.C['namebegin'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var number_begin = block.getFieldValue('begin');
    //var code = '<br>&nbsp;<font color="#000000">'+text_name+'</font><font color="#434f54">.</font><font color="#d35400">begin</font><font color="#000000">(</font><font color="#000000">'+number_begin+'</font><font color="#000000">)</font><font color="#000000">;</font>';
    return text_name+".begin("+number_begin+");";
  };

  Blockly.C['serialbegin'] = function(block) {
    var number_name = block.getFieldValue('NAME');  
    //var code = '<br>&nbsp;<b><font color="#d35400">Serial</font></b><font color="#434f54">.</font><font color="#d35400">begin</font><font color="#000000">(</font><font color="#000000">'+number_name+'</font><font color="#000000">)</font><font color="#000000">;</font>   ';
    return "Serial.begin("+number_name+");";
  };
  
  Blockly.C['if'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var statements_name = Blockly.C.statementToCode(block, 'IF');  
    //var code = '<br>&nbsp<font color="#5e6d03">if</font><font color="#000000">(</font><font color="#000000">'+text_name+'</font><font color="#000000">)</font><font color="#000000">{<br></font>;&nbsp'+statements_name+'<br><font color="#000000"><br>&nbsp}</font>';
    return "if("+text_name+"){\n "+statements_name+"\n}";
  };
  
  Blockly.C['serialprint'] = function(block) {
    var text_text = block.getFieldValue('text');  
    //var code = '<br>&nbsp;<font color="#d35400">Serial</font></b><font color="#434f54">.</font><font color="#d35400">print</font><font color="#000000">(</font><font color="#000000">'+text_text+'</font><font color="#000000">)</font><font color="#000000">;</font>';
    return "Serial.print("+text_text+");";
  };

  Blockly.C['analogwrite'] = function(block) {
    var text_nome = block.getFieldValue('nome');
    var text_valor = block.getFieldValue('valor');
    //var code = '<br>&nbsp<font color="#d35400">analogWrite</font><font color="#000000">(</font><font color="#000000">'+text_nome+'</font><font color="#000000">)</font><font color="#000000">;</font>';
    return "analogWrite("+text_nome+", "+text_valor+");";
  };

  Blockly.C['map'] = function(block) {
    var text_valor = block.getFieldValue('valor');
    var text_demenor = block.getFieldValue('deMenor');
    var text_demaior = block.getFieldValue('deMaior');
    var text_paramenor = block.getFieldValue('paraMenor');
    var text_paramaior = block.getFieldValue('paraMaior');  
    //var code = '<br><font color="#d35400">map</font><font color="#000000">(</font><font color="#000000">'+text_valor+'</font><font color="#434f54">,</font> <font color="#000000">'+text_demenor+'</font><font color="#434f54">,</font> <font color="#000000">'+text__demaior+'</font><font color="#434f54">,</font> <font color="#000000">'+text_paramenor+'</font><font color="#434f54">,</font> <font color="#000000">'+text_paramaior+'</font><font color="#000000">)</font>';
    return "map(("+text_valor+"), "+text_demenor+", "+text_demaior+", "+text_paramenor+", "+text_paramaior+");";
  };

  Blockly.C['serialprintln'] = function(block) {
    var text_text = block.getFieldValue('text');  
    //var code = '<br>&nbsp;<b><font color="#d35400">Serial</font></b><font color="#434f54">.</font><font color="#d35400">println</font><font color="#000000">(</font><font color="#000000">'+text_text+'</font><font color="#000000">)</font><font color="#000000">;</font>';
    return "Serial.println("+text_text+");";
  };

  Blockly.C['igualdade'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var text_text = block.getFieldValue('text');  
    //var code = '&nbsp;<font color="#000000">'+text_name+'</font> <font color="#434f54">=</font> <font color="#000000">'+text_text+'</font><font color="#000000">;</font>';
    return text_name+"=="+text_text;
  };

  Blockly.C['quadrado'] = function(block) {
    var number_valor = block.getFieldValue('valor');
  
    var code = '...\n';
    return code;
  };

  Blockly.C['circulo'] = function(block) {
    var number_valor = block.getFieldValue('valor');
  
    var code = '...\n';
    return code;
  };

  Blockly.C['triangulo'] = function(block) {
    var number_valor = block.getFieldValue('valor');
  
    var code = '...\n';
    return code;
  };
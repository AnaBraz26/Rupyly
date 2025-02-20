
//----------------------------------------------------------------------------------------------------------------
// Generator

Blockly.C = Object.create(Blockly.Generator.prototype);
Blockly.C.name_ = 'C';

Blockly.C['setup'] = function(block, generator) {
  var statements_name = Blockly.CstatementToCode(block, 'Void_setup');
  // TODO: Assemble JavaScript into code variable.
  //var code = '<br><br><font color="#00979c">void</font> <font color="#5e6d03">setup</font><font color="#000000">(</font><font color="#000000">)</font><br><font color="#000000">{</font>&nbsp;'+statements_name+'<br><font color="#000000">}</font>';
  //var code = "void setup(){}";
  return "void setup(){\n" +statements_name+ "\n}";
};

Blockly.C['loop'] = function(block, generator) {
  var statements_name = Blockly.C.statementToCode(block, 'Void_loop');
  // TODO: Assemble JavaScript into code variable.
  var code = '<br><br><font color="#00979c">void</font> <font color="#5e6d03">loop</font><font color="#000000">(</font><font color="#000000">)</font><br><font color="#000000">{</font>&nbsp;'+statements_name+'<br><font color="#000000">}</font>';
    return code;
};

Blockly.C['led'] = function(block, generator) {
  var text_nome = block.getFieldValue('nome');
  var number_porta = block.getFieldValue('porta');
  // TODO: Assemble javascript into code variable.
  //var code = '<br><font color="#00979c">int </font><font color="#000000">led'+ text_nome +'</font><font color="#434f54"> =</font> <font color="#000000">'+number_porta+'</font><font color="#000000">;</font>';
  return "int led"+ text_nome+" = "+number_porta+";";
};

Blockly.C['pinmode_led'] = function(block, generator) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('mode');
  // TODO: Assemble javascript into code variable.
  var code = '<br>&nbsp;<font color="#d35400">pinMode</font><font color="#000000">(</font><font color="#000000">'+text_nome+'</font><font color="#434f54">,</font> <font color="#00979c">'+dropdown_modo+'</font><font color="#000000">)</font><font color="#000000">;</font>';
  return code;
};

Blockly.C['digitalwrite_led'] = function(block, generator) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('modo');
  // TODO: Assemble javascript into code variable.
  var code = '<br>&nbsp;<font color="#d35400">digitalWrite</font><font color="#000000">(</font><font color="#000000">'+text_nome+'</font><font color="#434f54">,</font><font color="#00979c">'+dropdown_modo+'</font><font color="#000000">)</font><font color="#000000">;</font>';
  return code;
};

Blockly.C['buzzer'] = function(block, generator) {
  var text_nome = block.getFieldValue('nome');
  var number_porta = block.getFieldValue('porta');
  // TODO: Assemble javascript into code variable.
  var code = '<br><font color="#00979c">int </font><font color="#000000">buzzer'+ text_nome +'</font><font color="#434f54"> =</font> <font color="#000000">'+number_porta+'</font><font color="#000000">;</font>';
  return code;
};


Blockly.C['pinmode_buzzer'] = function(block, generator) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('mode');
  // TODO: Assemble javascript into code variable.
  var code = '<br>&nbsp;<font color="#d35400">pinMode</font><font color="#000000">(</font><font color="#000000">'+text_nome+'</font><font color="#434f54">,</font> <font color="#00979c">'+dropdown_modo+'</font><font color="#000000">)</font><font color="#000000">;</font>';
  return code;
};


Blockly.C['digitalwrite_buzzer'] = function(block, generator) {
  var text_nome = block.getFieldValue('nome');
  var dropdown_modo = block.getFieldValue('modo');
  // TODO: Assemble javascript into code variable.
  var code = '<br>&nbsp;<font color="#d35400">digitalWrite</font><font color="#000000">(</font><font color="#000000">'+text_nome+'</font><font color="#434f54">,</font><font color="#00979c">'+dropdown_modo+'</font><font color="#000000">)</font><font color="#000000">;</font>';
  return code;
};

Blockly.C['delay'] = function(block, generator) {
  var number_delay = block.getFieldValue('Delay');
  // TODO: Assemble javascript into code variable.
  var code = '<br>&nbsp;<font color="#d35400">delay</font><font color="#000000">(</font><font color="#000000">'+number_delay+'</font><font color="#000000">)</font><font color="#000000">;</font>';
  return code;
};


Blockly.C['Biblioteca_Motor'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = '<br><font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><b><font color="#d35400">Servo</font></b><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>';
    return code;
  };

  Blockly.C['motor'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble javascript into code variable.
    var code = '<br><font color="#d35400">Servo</font></b> <font color="#000000">motor'+text_name+'</font><font color="#000000">;</font>';

    return code;
  };

  Blockly.C['motor_attach'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var number_porta = block.getFieldValue('porta');
    // TODO: Assemble javascript into code variable.
    var code = '<br>&nbsp;<font color="#000000">motor'+text_name+'</font><font color="#434f54">.</font><font color="#d35400">attach</font><font color="#000000">(</font><font color="#000000">'+number_porta+'</font><font color="#000000">)</font>';
    return code;
  };

  Blockly.C['motor_write'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var number_valor = block.getFieldValue('valor');
    // TODO: Assemble javascript into code variable.
    var code = '<br>&nbsp;<font color="#000000">motor'+text_name+'</font><font color="#434f54">.</font><font color="#d35400">write</font><font color="#000000">(</font><font color="#000000">'+number_valor+'</font><font color="#000000">)</font><font color="#000000">;</font>';
    return code;
  };

  Blockly.C['SoftwareSerial'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = '<br><font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><b><font color="#d35400">SoftwareSerial</font></b><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>';
    return code;
  };
  
  Blockly.C['software'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var number_rxpin = block.getFieldValue('rxPin');
    var number_txpin = block.getFieldValue('txPin');
    // TODO: Assemble javascript into code variable.
    var code = '<br><font color="#d35400">SoftwareSerial</font></b> <font color="#000000">'+text_name+'</font><font color="#000000">(</font><font color="#000000">'+number_rxpin+'</font><font color="#434f54">,</font> <font color="#000000">'+number_txpin+'</font><font color="#000000">)</font><font color="#000000">;</font>';
    return code;
  };

  Blockly.C['byte'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble javascript into code variable.
    var code = '<br><font color="#00979c">byte</font> <font color="#000000">'+text_name+'</font><font color="#000000">;</font>';
    return code;
  };
 
  Blockly.C['int'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var number_int = block.getFieldValue('int');
    // TODO: Assemble javascript into code variable.
    var code = '<br><font color="#00979c">int</font> <font color="#000000">'+text_name+'</font> <font color="#434f54">=</font> <font color="#000000">'+number_int+'</font><font color="#000000">;</font> ';
    return code;
  };

  Blockly.C['namebegin'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var number_begin = block.getFieldValue('begin');
    // TODO: Assemble javascript into code variable.
    var code = '<br>&nbsp;<font color="#000000">'+text_name+'</font><font color="#434f54">.</font><font color="#d35400">begin</font><font color="#000000">(</font><font color="#000000">'+number_begin+'</font><font color="#000000">)</font><font color="#000000">;</font>';
    return code;
  };

  Blockly.C['serialbegin'] = function(block, generator) {
    var number_name = block.getFieldValue('NAME');
    // TODO: Assemble javascript into code variable.
    var code = '<br>&nbsp;<b><font color="#d35400">Serial</font></b><font color="#434f54">.</font><font color="#d35400">begin</font><font color="#000000">(</font><font color="#000000">'+number_name+'</font><font color="#000000">)</font><font color="#000000">;</font>   ';
    return code;
  };
  
  Blockly.C['if'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var statements_name = Blockly.C.statementToCode(block, 'IF');
    // TODO: Assemble javascript into code variable.
    var code = '<br>&nbsp<font color="#5e6d03">if</font><font color="#000000">(</font><font color="#000000">'+text_name+'</font><font color="#000000">)</font><font color="#000000">{<br></font>;&nbsp'+statements_name+'<br><font color="#000000"><br>&nbsp}</font>';
    return code;
  };
  
  Blockly.C['serialprint'] = function(block, generator) {
    var text_text = block.getFieldValue('text');
    // TODO: Assemble javascript into code variable.
    var code = '<br>&nbsp;<font color="#d35400">Serial</font></b><font color="#434f54">.</font><font color="#d35400">print</font><font color="#000000">(</font><font color="#000000">'+text_text+'</font><font color="#000000">)</font><font color="#000000">;</font>';
    return code;
  };

  Blockly.C['analogwrite'] = function(block, generator) {
    var text_nome = block.getFieldValue('nome');
    // TODO: Assemble javascript into code variable.
    var code = '<br>&nbsp<font color="#d35400">analogWrite</font><font color="#000000">(</font><font color="#000000">'+text_nome+'</font><font color="#000000">)</font><font color="#000000">;</font>';
    return code;
  };

  Blockly.C['map'] = function(block, generator) {
    var text_valor = block.getFieldValue('valor');
    var text_demenor = block.getFieldValue('deMenor');
    var text__demaior = block.getFieldValue(' deMaior');
    var text_paramenor = block.getFieldValue('paraMenor');
    var text_paramaior = block.getFieldValue('paraMaior');
    // TODO: Assemble javascript into code variable.
    var code = '<br><font color="#d35400">map</font><font color="#000000">(</font><font color="#000000">'+text_valor+'</font><font color="#434f54">,</font> <font color="#000000">'+text_demenor+'</font><font color="#434f54">,</font> <font color="#000000">'+text__demaior+'</font><font color="#434f54">,</font> <font color="#000000">'+text_paramenor+'</font><font color="#434f54">,</font> <font color="#000000">'+text_paramaior+'</font><font color="#000000">)</font>';
    return code;
  };

  Blockly.C['serialprintln'] = function(block, generator) {
    var text_text = block.getFieldValue('text');
    // TODO: Assemble javascript into code variable.
    var code = '<br>&nbsp;<b><font color="#d35400">Serial</font></b><font color="#434f54">.</font><font color="#d35400">println</font><font color="#000000">(</font><font color="#000000">'+text_text+'</font><font color="#000000">)</font><font color="#000000">;</font>';
    return code;
  };

  Blockly.C['igualdade'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var text_text = block.getFieldValue('text');
    // TODO: Assemble javascript into code variable.
    var code = '&nbsp;<font color="#000000">'+text_name+'</font> <font color="#434f54">=</font> <font color="#000000">'+text_text+'</font><font color="#000000">;</font>';
    return code;
  };

  Blockly.C['quadrado'] = function(block, generator) {
    var number_valor = block.getFieldValue('valor');
    // TODO: Assemble javascript into code variable.
    var code = '...\n';
    return code;
  };

  Blockly.C['circulo'] = function(block, generator) {
    var number_valor = block.getFieldValue('valor');
    // TODO: Assemble javascript into code variable.
    var code = '...\n';
    return code;
  };

  Blockly.C['triangulo'] = function(block, generator) {
    var number_valor = block.getFieldValue('valor');
    // TODO: Assemble javascript into code variable.
    var code = '...\n';
    return code;
  };
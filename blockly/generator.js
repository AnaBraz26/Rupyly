
//----------------------------------------------------------------------------------------------------------------
// Generator
Blockly.JavaScript['ativar_led'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = '<pre><font color="#00979c">int</font> <font color="#000000">led1</font> <font color="#434f54">=</font> <font color="#000000">12</font><font color="#000000">;</font><font color="#00979c">\nint</font> <font color="#000000">led2</font> <font color="#434f54">=</font> <font color="#000000">13</font><font color="#000000">;</font></pre>';
    return code;
  };
  
Blockly.JavaScript['setup'] = function(block, generator) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'Void_setup');
  // TODO: Assemble JavaScript into code variable.
  var code = '<br>void setup(){<br>\n'+statements_name+'<br>}';
  var code = '<pre><br><font color="#00979c">void</font> <font color="#5e6d03">setup</font><font color="#000000">(</font><font color="#000000">)</font><br><font color="#000000">{</font>&nbsp;'+statements_name+'<br><font color="#000000">}</font></pre>';
    return code;
};

Blockly.JavaScript['loop'] = function(block, generator) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'Void_loop');
  // TODO: Assemble JavaScript into code variable.
  var code = '<br>void loop(){<br>\n'+statements_name+'<br>}';
  var code = '<pre><br><font color="#00979c">void</font> <font color="#5e6d03">loop</font><font color="#000000">(</font><font color="#000000">)</font><br><font color="#000000">{</font>&nbsp;'+statements_name+'<br><font color="#000000">}</font></pre>';
    return code;
};

Blockly.JavaScript['led'] = function(block, generator) {
  var text_nome = block.getFieldValue('nome');
  var number_porta = block.getFieldValue('porta');
  // TODO: Assemble javascript into code variable.
  var code = '<pre><font color="#00979c">int </font><font color="#000000">led'+ text_nome +'</font><font color="#434f54"> =</font> <font color="#000000">'+number_porta+'</font><font color="#000000">;</font></pre>';
  return code;
};

Blockly.JavaScript['pinmode'] = function(block, generator) {
  var text_nome = block.getFieldValue('nome');
  var text_formato = block.getFieldValue('formato');
  // TODO: Assemble javascript into code variable.
  var code = '<pre>&nbsp;<font color="#d35400">pinMode</font><font color="#000000">(</font><font color="#000000">'+text_nome+'</font><font color="#434f54">,</font> <font color="#00979c">'+text_formato+'</font><font color="#000000">)</font><font color="#000000">;</font></pre>';
  return code;
};

Blockly.JavaScript['digitalwrite'] = function(block, generator) {
  var text_nome = block.getFieldValue('nome');
  var text_estado = block.getFieldValue('estado');
  // TODO: Assemble javascript into code variable.
  var code = '<pre>&nbsp;<font color="#d35400">digitalWrite</font><font color="#000000">(</font><font color="#000000">'+text_nome+'</font><font color="#434f54">,</font><font color="#00979c">'+text_estado+'</font><font color="#000000">)</font><font color="#000000">;</font></pre>';
  return code;
};

Blockly.JavaScript['delay'] = function(block, generator) {
  var number_delay = block.getFieldValue('Delay');
  // TODO: Assemble javascript into code variable.
  var code = '<pre>&nbsp;<font color="#d35400">delay</font><font color="#000000">(</font><font color="#000000">'+number_delay+'</font><font color="#000000">)</font><font color="#000000">;</font></pre>';
  return code;
};

Blockly.JavaScript['buzzer'] = function(block, generator) {
  var text_nome = block.getFieldValue('nome');
  var number_porta = block.getFieldValue('porta');
  var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = '<pre><font color="#00979c">int </font><font color="#000000">buzzer'+ text_nome +'</font><font color="#434f54"> =</font> <font color="#000000">'+number_porta+'</font><font color="#000000">;</font></pre>';
  return code;
};

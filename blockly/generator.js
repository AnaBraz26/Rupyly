
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
  // TODO: Assemble javascript into code variable.
  var code = '<pre><font color="#00979c">int </font><font color="#000000">buzzer'+ text_nome +'</font><font color="#434f54"> =</font> <font color="#000000">'+number_porta+'</font><font color="#000000">;</font></pre>';
  return code;
};


Blockly.JavaScript['Motor'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = '<pre><font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><b><font color="#d35400">Servo</font></b><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font></pre>';
    return code;
  };

  Blockly.JavaScript['SoftwareSerial'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = '<pre><font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><b><font color="#d35400">SoftwareSerial</font></b><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font></pre>';
    return code;
  };

  Blockly.JavaScript['motor'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble javascript into code variable.
    var code = '<pre><b><font color="#d35400">Servo</font></b> <font color="#000000">motor'+text_name+'</font><font color="#000000">;</font></pre>';

    return code;
  };

  Blockly.JavaScript['motor_attach'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var number_porta = block.getFieldValue('porta');
    // TODO: Assemble javascript into code variable.
    var code = '<pre>&nbsp;<font color="#000000">motor'+text_name+'</font><font color="#434f54">.</font><font color="#d35400">attach</font><font color="#000000">(</font><font color="#000000">'+number_porta+'</font><font color="#000000">)</font></pre>';
    return code;
  };

  Blockly.JavaScript['motor_write'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var number_valor = block.getFieldValue('valor');
    // TODO: Assemble javascript into code variable.
    var code = '<pre>&nbsp;<font color="#000000">motor'+text_name+'</font><font color="#434f54">.</font><font color="#d35400">write</font><font color="#000000">(</font><font color="#000000">'+number_valor+'</font><font color="#000000">)</font><font color="#000000">;</font></pre>';
    return code;
  };

  Blockly.JavaScript['notas_piano'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = '<pre><font color="#5e6d03">#define</font> <font color="#000000">NOTE_B0</font> &nbsp;<font color="#000000">31</font> <font color="#5e6d03">#define</font> <font color="#000000">NOTE_C1</font> &nbsp;<font color="#000000">33</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_CS1</font> <font color="#000000">35</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_D1</font> &nbsp;<font color="#000000">37</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_DS1</font> <font color="#000000">39</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_E1</font> &nbsp;<font color="#000000">41</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_F1</font> &nbsp;<font color="#000000">44</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_FS1</font> <font color="#000000">46</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_G1</font> &nbsp;<font color="#000000">49</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_GS1</font> <font color="#000000">52</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_A1</font> &nbsp;<font color="#000000">55</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_AS1</font> <font color="#000000">58</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_B1</font> &nbsp;<font color="#000000">62</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_C2</font> &nbsp;<font color="#000000">65</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_CS2</font> <font color="#000000">69</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_D2</font> &nbsp;<font color="#000000">73</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_DS2</font> <font color="#000000">78</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_E2</font> &nbsp;<font color="#000000">82</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_F2</font> &nbsp;<font color="#000000">87</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_FS2</font> <font color="#000000">93</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_G2</font> &nbsp;<font color="#000000">98</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_GS2</font> <font color="#000000">104</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_A2</font> &nbsp;<font color="#000000">110</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_AS2</font> <font color="#000000">117</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_B2</font> &nbsp;<font color="#000000">123</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_C3</font> &nbsp;<font color="#000000">131</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_CS3</font> <font color="#000000">139</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_D3</font> &nbsp;<font color="#000000">147</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_DS3</font> <font color="#000000">156</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_E3</font> &nbsp;<font color="#000000">165</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_F3</font> &nbsp;<font color="#000000">175</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_FS3</font> <font color="#000000">185</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_G3</font> &nbsp;<font color="#000000">196</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_GS3</font> <font color="#000000">208</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_A3</font> &nbsp;<font color="#000000">220</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_AS3</font> <font color="#000000">233</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_B3</font> &nbsp;<font color="#000000">247</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_C4</font> &nbsp;<font color="#000000">262</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_CS4</font> <font color="#000000">277</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_D4</font> &nbsp;<font color="#000000">294</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_DS4</font> <font color="#000000">311</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_E4</font> &nbsp;<font color="#000000">330</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_F4</font> &nbsp;<font color="#000000">349</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_FS4</font> <font color="#000000">370</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_G4</font> &nbsp;<font color="#000000">392</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_GS4</font> <font color="#000000">415</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_A4</font> &nbsp;<font color="#000000">440</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_AS4</font> <font color="#000000">466</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_B4</font> &nbsp;<font color="#000000">494</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_C5</font> &nbsp;<font color="#000000">523</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_CS5</font> <font color="#000000">554</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_D5</font> &nbsp;<font color="#000000">587</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_DS5</font> <font color="#000000">622</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_E5</font> &nbsp;<font color="#000000">659</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_F5</font> &nbsp;<font color="#000000">698</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_FS5</font> <font color="#000000">740</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_G5</font> &nbsp;<font color="#000000">784</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_GS5</font> <font color="#000000">831</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_A5</font> &nbsp;<font color="#000000">880</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_AS5</font> <font color="#000000">932</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_B5</font> &nbsp;<font color="#000000">988</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_C6</font> &nbsp;<font color="#000000">1047</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_CS6</font> <font color="#000000">1109</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_D6</font> &nbsp;<font color="#000000">1175</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_DS6</font> <font color="#000000">1245</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_E6</font> &nbsp;<font color="#000000">1319</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_F6</font> &nbsp;<font color="#000000">1397</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_FS6</font> <font color="#000000">1480</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_G6</font> &nbsp;<font color="#000000">1568</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_GS6</font> <font color="#000000">1661</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_A6</font> &nbsp;<font color="#000000">1760</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_AS6</font> <font color="#000000">1865</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_B6</font> &nbsp;<font color="#000000">1976</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_C7</font> &nbsp;<font color="#000000">2093</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_CS7</font> <font color="#000000">2217</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_D7</font> &nbsp;<font color="#000000">2349</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_DS7</font> <font color="#000000">2489</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_E7</font> &nbsp;<font color="#000000">2637</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_F7</font> &nbsp;<font color="#000000">2794</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_FS7</font> <font color="#000000">2960</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_G7</font> &nbsp;<font color="#000000">3136</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_GS7</font> <font color="#000000">3322</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_A7</font> &nbsp;<font color="#000000">3520</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_AS7</font> <font color="#000000">3729</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_B7</font> &nbsp;<font color="#000000">3951</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_C8</font> &nbsp;<font color="#000000">4186</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_CS8</font> <font color="#000000">4435</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_D8</font> &nbsp;<font color="#000000">4699</font>    <font color="#5e6d03">#define</font> <font color="#000000">NOTE_DS8</font> <font color="#000000">4978</font>    <font color="#5e6d03">#define</font> <font color="#000000">REST</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000000">0</font></pre>';
    return code;
  };
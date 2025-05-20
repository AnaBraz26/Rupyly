import * as pt from 'blockly/msg/pt';
Blockly.setLocale(pt);
  
const options = {
  toolbox: toolboxCategories,
  collapse: true,
  comments: true,
  disable: false,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  toolboxPosition: 'start',
  css: true,
  media: 'https://blockly-demo.appspot.com/static/media/',
  rtl: false,
  scrollbars: true,
  sounds: true,
  oneBasedIndex: true,
  grid: {
    spacing: 100,
    length: 5,
    colour: '#888',
    snap: false
  },
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1, // ajustado
    maxScale: 15,
    minScale: 0.75,
    scaleSpeed: 1.2
  }
};

// Injeta o workspace
const workspace = Blockly.inject('blocklyDiv', options);

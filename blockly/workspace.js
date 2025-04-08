window.addEventListener("load", function () {
	var toolbox = document.getElementById("toolbox");

	var options = { 
		toolbox : toolbox, 
		collapse : true, 
		comments : true, 
		disable : false, 
		maxBlocks : Infinity, 
		trashcan : true, 
		horizontalLayout : false, 
		toolboxPosition : 'start', 
		css : true, 
		media : 'https://blockly-demo.appspot.com/static/media/', 
		rtl : false, 
		scrollbars : true, 
		sounds : true, 
		oneBasedIndex : true, 
		grid : {
			spacing : 100, 
			length : 5, 
			colour : '#888', 
			snap : false
		}, 
		zoom : {
			controls : true, 
			wheel : true, 
			startScale : 5, 
			maxScale : 15, 
			minScale : 0.75, 
			scaleSpeed : 1.2
		}
	};

	var workspace = Blockly.inject('blocklyDiv', options);

	var workspaceBlocks = document.getElementById("workspaceBlocks"); 
	Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
});

function prepareLocalCanvas()
{
	canvas_simpleSizes = document.getElementById('canvasSimpleSizes');
	context_simpleSizes = canvas_simpleSizes.getContext("2d"); // Grab the 2d canvas context
	
	// Add mouse events
	// ----------------
	$('#canvasSimpleSizes').mousedown(function(e)
	{
		// Mouse down location
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
		
		paint_simpleSizes = true;
		addClickSimpleSizes(mouseX, mouseY, false);
		redrawSimpleSizes();
	});
	
	$('#canvasSimpleSizes').mousemove(function(e){
		if(paint_simpleSizes){
			addClickSimpleSizes(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
			redrawSimpleSizes();
		}
	});
	
	$('#canvasSimpleSizes').mouseup(function(e){
		paint_simpleSizes = false;
	  	redrawSimpleSizes();
	});
	
	$('#canvasSimpleSizes').mouseleave(function(e){
		paint_simpleSizes = false;
	});
	
	$('#choosePurpleSimpleSizes').mousedown(function(e){
		curColor_simpleSizes = colorPurple;
	});
	$('#chooseGreenSimpleSizes').mousedown(function(e){
		curColor_simpleSizes = colorGreen;
	});
	$('#chooseYellowSimpleSizes').mousedown(function(e){
		curColor_simpleSizes = colorYellow;
	});
	$('#chooseBrownSimpleSizes').mousedown(function(e){
		curColor_simpleSizes = colorBrown;
	});	
	$('#chooseSmallSimpleSizes').mousedown(function(e){
		curSize_simpleSizes = "small";
	});
	$('#chooseNormalSimpleSizes').mousedown(function(e){
		curSize_simpleSizes = "normal";
	});
	$('#chooseLargeSimpleSizes').mousedown(function(e){
		curSize_simpleSizes = "large";
	});
	$('#chooseHugeSimpleSizes').mousedown(function(e){
		curSize_simpleSizes = "huge";
	});
	
	$('#clearCanvasSimpleSizes').mousedown(function(e)
	{
		clickX_simpleSizes = new Array();
		clickY_simpleSizes = new Array();
		clickDrag_simpleSizes = new Array();
		clickColor_simpleSizes = new Array();
		clickSize_simpleSizes = new Array();
		clearCanvas_simpleSizes();
	});
}


prepareLocalCanvas()

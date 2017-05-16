/****************************************************************************** Simple Canvas With Sizes */


var canvas;
var context;
var canvasWidth = 1024;
var canvasHeight = 768;
var padding = 25;
var lineWidth = 8;
var colorPurple = "#cb3594";
var colorGreen = "#659b41";
var colorYellow = "#ffcf33";
var colorBrown = "#986928";
var outlineImage = new Image();
var crayonImage = new Image();
var markerImage = new Image();
var eraserImage = new Image();
var crayonBackgroundImage = new Image();
var markerBackgroundImage = new Image();
var eraserBackgroundImage = new Image();
var crayonTextureImage = new Image();
var clickX = new Array();
var clickY = new Array();
var clickColor = new Array();
var clickTool = new Array();
var clickSize = new Array();
var clickDrag = new Array();
var paint = false;
var curColor = colorPurple;
var curTool = "crayon";
var curSize = "normal";
var mediumStartX = 18;
var mediumStartY = 19;
var mediumImageWidth = 93;
var mediumImageHeight = 46;
var drawingAreaX = 111;
var drawingAreaY = 11;
var drawingAreaWidth = 267;
var drawingAreaHeight = 200;
var toolHotspotStartY = 23;
var toolHotspotHeight = 38;
var sizeHotspotStartY = 157;
var sizeHotspotHeight = 36;
var sizeHotspotWidthObject = new Object();
sizeHotspotWidthObject.huge = 39;
sizeHotspotWidthObject.large = 25;
sizeHotspotWidthObject.normal = 18;
sizeHotspotWidthObject.small = 16;

var clickX_simpleSizes = new Array();
var clickY_simpleSizes = new Array();
var clickDrag_simpleSizes = new Array();
var clickColor_simpleSizes = new Array();
var clickSize_simpleSizes = new Array();
var paint_simpleSizes;
var canvas_simpleSizes;
var context_simpleSizes;
var curColor_simpleSizes = colorPurple;
var curSize_simpleSizes = "normal";


function addClickSimpleSizes(x, y, dragging)
{
	clickX_simpleSizes.push(x);
	clickY_simpleSizes.push(y);
	clickDrag_simpleSizes.push(dragging);
	clickColor_simpleSizes.push(curColor_simpleSizes);
	clickSize_simpleSizes.push(curSize_simpleSizes);
}

function clearCanvas_simpleSizes()
{
	context_simpleSizes.clearRect(0, 0, canvasWidth, canvasHeight);
}

function redrawSimpleSizes()
{
	clearCanvas_simpleSizes();
	
	var radius;
	context_simpleSizes.lineJoin = "round";
	
			
	for(var i=0; i < clickX_simpleSizes.length; i++)
	{
		if(clickSize_simpleSizes[i] == "small"){
			radius = 2;
		}else if(clickSize_simpleSizes[i] == "normal"){
			radius = 5;
		}else if(clickSize_simpleSizes[i] == "large"){
			radius = 10;
		}else if(clickSize_simpleSizes[i] == "huge"){
			radius = 20;
		}
	
		context_simpleSizes.beginPath();
		if(clickDrag_simpleSizes[i] && i){
			context_simpleSizes.moveTo(clickX_simpleSizes[i-1], clickY_simpleSizes[i-1]);
		}else{
			context_simpleSizes.moveTo(clickX_simpleSizes[i]-1, clickY_simpleSizes[i]);
		}
		context_simpleSizes.lineTo(clickX_simpleSizes[i], clickY_simpleSizes[i]);
		context_simpleSizes.closePath();
		context_simpleSizes.strokeStyle = clickColor_simpleSizes[i];
		context_simpleSizes.lineWidth = radius;
		context_simpleSizes.stroke();
	}
}



var canvas;
var stage;
var i=10;

function init() {
 	
	canvas = document.getElementById('mnomCanvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	stage = new createjs.Stage("mnomCanvas");
	gen(i);
	
	stage.update();
	
	
  }
function poly (x,y,n,size, color) {
	var polygon = new createjs.Shape();
	polygon.graphics.beginStroke("black").f(color);
	if (n == 3)
	{
		polygon.graphics.moveTo(0, 0).lineTo(size, size).lineTo(-size, size).lineTo(0, 0);
	}

	if (n == 4)
	{
		polygon.graphics.moveTo(-size/2, 0).lineTo(size/2, 0).lineTo(size/2, size).lineTo(-size/2, size).lineTo(-size/2, 0);
	}
	if (n == 5)
	{
		
		polygon.graphics.moveTo(-size/3.2, 0).lineTo(size/3.2, 0).lineTo(size/3.5+size/3, size/2).lineTo(0, size/3.5+size/1.5).lineTo(-size/3-size/3.5, size/2).lineTo(-size/3.2, 0);
	}
	if (n == 6)
	{
		polygon.graphics.moveTo(-size/3.5, 0).lineTo(size/3.5, 0).lineTo(size/2, size/2).lineTo(size/3.5, size).lineTo(-size/3.5,size).lineTo(-size/2, size/2).lineTo(-size/3.5, 0);
	}
	polygon.x = x;
	polygon.y = y;
	return polygon;
}

function gen (i){
	var shape = [];
	var x1, y1, n1, size1, color1;
	
	for (var b = 0; b < i; b++) {
		x1=Math.floor(Math.random()*canvas.width);
		y1=Math.floor(Math.random()*canvas.height);
		n1=Math.floor(Math.random()*(7-3))+3;
		size1=Math.floor(Math.random()*100);
		color1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		var p = poly(x1, y1, n1, size1, color1);
		shape[b]=p;
		console.log(n1);
		console.log(color1);
		stage.addChild(shape[b]);
	};
	stage.update();
	
}
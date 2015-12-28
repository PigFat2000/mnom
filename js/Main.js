
var canvas;
var stage;
var i=10;
var shape = [];
var circle;
function init() {
 	
	canvas = document.getElementById('mnomCanvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	stage = new createjs.Stage("mnomCanvas");

	createjs.Ticker.addEventListener("tick", tick);
	gen(i);

	//var pt = objA.localToLocal(posX, posY, );
	//console.log(pt.x, pt.y);
	

	circle = new createjs.Shape();
	
	circle.graphics.setStrokeStyle(5).beginStroke("#000000").beginFill("#FF0000").drawCircle(0, 0, 30);
	circle.x=Math.floor(Math.random()*canvas.width);
		if(circle.x<50) 
			circle.x=circle.x+50;
		if(circle.x>(canvas.width-50)) 
			circle.x=circle.x-50;
	circle.y=Math.floor(Math.random()*canvas.height);
		if(circle.x<50)	
			circle.x=circle.x+50;
		if(circle.x>(canvas.height-50)) 	
			circle.x=circle.x-50;
	stage.addChild(circle);
	console.log(circle.x,circle.y);
  }

function tick() {mov(i);  stage.update();}

function poly (x,y,n,size, color) {
	var polygon = new createjs.Shape();
	polygon.graphics.beginStroke("black").f(color);
	if (n == 3)
	{
		polygon.graphics.moveTo(0, 0).lineTo(size/1.5, size/1.5).lineTo(-size/1.5, size/1.5).lineTo(0, 0);
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
var p;
function gen (i){
	
	var x1, y1, n1, size1, color1;
	
	for (var b = 0; b < i; b++) {
		size1=Math.floor(Math.random()*(115))+5;
		x1=Math.floor(Math.random()*canvas.width);
		if(x1<size1) 
			x1=x1+size1;
		if(x1>(canvas.width-size1)) 
			x1=x1-size1;
		y1=Math.floor(Math.random()*canvas.height);
		if(y1<size1)	
			y1=y1+size1;
		if(y1>(canvas.height-size1)) 	
			y1=y1-size1;
		n1=Math.floor(Math.random()*(4))+3;
		color1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		p = poly(x1, y1, n1, size1, color1);
		p.size = size1;
		shape[b]=p;
		console.log(n1);
		console.log(color1);
		stage.addChild(shape[b]);
	};
}
function mov (i) {
	for (var b = 0; b < i; b++) {
		/*var g = Math.floor(Math.random()*255);
		if (g<64) shape[b].y--;
		else{
			if (g<128) shape[b].y++;
			else{
				if (g<192) shape[b].x++;
				else{
					if (g<256) shape[b].x--;
				}
			}
		}*/
		if(circle.x<shape[b].x)
			shape[b].x-=80/shape[b].size;
		if(circle.x>shape[b].x)
			shape[b].x+=80/shape[b].size;
		if (circle.y<shape[b].y)
			shape[b].y-=80/shape[b].size;
		if (circle.y>shape[b].y)
			shape[b].y+=80/shape[b].size;
		//if (circle.y==shape[b].y&&circle.x==shape[b].x)
	}

}
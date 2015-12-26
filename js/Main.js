 function init() {
 	canvas = document.getElementById('mnomCanvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
    var stage = new createjs.Stage("mnomCanvas");
    var rect = new createjs.Shape();
	rect.graphics.beginFill("DeepSkyBlue").drawRect(-50, -50, 100, 100);
	rect.x = canvas.width/2;
	rect.y = canvas.height/2;
	stage.addChild(rect);
	var p = poly(canvas.width/2, canvas.height/2, 4, 100, "#FFCCFF");
	stage.addChild(p);
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
	
	polygon.x = x;
	polygon.y = y;
	return polygon;
}
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
	stage.update();
  }

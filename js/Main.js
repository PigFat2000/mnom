 function init() {
    var stage = new createjs.Stage("demoCanvas");
    var rect = new createjs.Shape();
	rect.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, 50, 50);
	rect.x = 100;
	rect.y = 100;
	stage.addChild(rect);
	stage.update();
  }

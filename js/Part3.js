function Part3()
{

	//
	// Vars
	//
	this.boy = part1.boy;
	this.boy.x = 100;
	this.girl = part1.girl;
	this.girl.x = 150;
	this.bg3 = new Background("images/background3.png", [
		new TextSign(800, 20, 5, 542, 451, 641, 2, "images/signs.png"),
		new TextSign(1480, 170, 3, 646, 539, 710, 2, "images/signs.png"),
		new TextSign(2160, 80, 3, 718, 507, 815, 2, "images/signs.png"),
		new TextSign(2840, 175, 6, 822, 457, 888, 2, "images/signs.png"),
		new TextSign(3480, 100, 6, 892, 445, 992, 2, "images/signs.png"),
		new TextSign(4050, 210, 7, 994, 388, 1036, 2, "images/signs.png")
	]);
	this.fadeIn = new FadeIn(3367, 20);
	this.fadeOut = new FadeOut(5000, 30, 20);
	
	
	
	//
	// Init
	//
	this.init = function()
	{
		scrollX = 0;
		scrollY = 0;
		speed = initSpeed;
	}
 

	//
	// Update
	//
	this.update = function()
	{
		scrollX -= speed / 2.0 * 1.05;
		
		this.bg3.move(-speed / 2.0 * 1.05, 0);
		this.boy.move(speed * 0.58, 0);
		this.girl.move(speed * 0.58, 0);
		
		this.boy.update();
		this.girl.update();
		this.fadeIn.update();
		this.fadeOut.update();
		
		if (this.fadeOut.mustChangePart())
			nextPart(new Part4());
	}



	//
	// Render
	//
	this.draw = function()
	{
		this.bg3.draw();
		this.boy.draw();
		this.girl.draw();
		this.fadeIn.draw();
		this.fadeOut.draw();
	}
	
}
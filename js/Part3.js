function Part3()
{

	//
	// Vars
	//
	this.boy = part1.boy;
	this.boy.x = 130;
	this.girl = part1.girl;
	this.girl.x = 180;
	this.bg3 = new Background("images/background3.png", [
		new TextSign(800, 200, 0, 0, 200, 100, 1.6, "images/sign1.png")
	]);
	this.fadeIn = new FadeIn(3367, 20);
	this.fadeOut = new FadeOut(4300, 30, 20);
	
	
	
	//
	// Init
	//
	this.init = function()
	{
		scrollX = 0;
		scrollY = 0;
		speed = initSpeed * 0.7;
	}
 

	//
	// Update
	//
	this.update = function()
	{
		scrollX -= speed / 2.0 * 1.7;
		
		this.bg3.move(-speed / 2.0 * 1.7, 0);
		this.boy.move(speed * 0.9, 0);
		this.girl.move(speed * 0.9, 0);
		
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
function Part3()
{

	//
	// Vars
	//
	this.boy = part1.boy;
	this.boy.x = 150;
	this.girl = part1.girl;
	this.girl.x = 200;
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
	}
 

	//
	// Update
	//
	this.update = function()
	{
		scrollX -= speed * 1.4;
		
		this.bg3.move(-speed * 1.4, 0);
		this.boy.update();
		this.girl.update();

		this.fadeIn.update();
		this.fadeOut.update();
		
		if (this.fadeOut.mustChangePart())
			nextPart(interval, new Part4());
	}



	//
	// Render
	//
	this.draw = function()
	{
		this.bg3.draw(scrollX, scrollY);
		this.boy.draw();
		this.girl.draw();
		this.fadeIn.draw(scrollX);
		this.fadeOut.draw(scrollX);
	}
	
}
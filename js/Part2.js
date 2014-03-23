function Part2()
{

	//
	// Vars
	//
	this.bg2 = new Background("images/background2.png");
	this.nextFade = new FadeOut(4400, 30, 20);
	
	
	
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
		scrollX -= speed * 3;
		
		this.nextFade.update();
		
		if (this.nextFade.mustChangePart())
			nextPart(interval, new Part3());
	}



	//
	// Render
	//
	this.draw = function()
	{
		ctx.translate(scrollX, scrollY);
		this.bg2.draw(scrollX, scrollY);
		this.nextFade.draw(scrollX);
	}
	
}
function Part2()
{

	//
	// Vars
	//
	this.bg2 = new Background("images/background2.png");
	this.fadeIn = new FadeIn(2250, 20);
	this.fadeOut = new FadeOut(4400, 30, 20);
	
	this.slides = [
		new Slide(2350, 2370, 800),
		new Slide(2450, 2470, 800)
	];
	
	
	
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
		//scrollX -= speed * 3;
		
		for (key in this.slides)
		{
			this.slides[key].update();
			
			if (this.slides[key].isInProgress())
				scrollX -= this.slides[key].speed;
		}
		
		this.fadeOut.update();
		this.fadeIn.update();
		
		if (this.fadeOut.mustChangePart())
			nextPart(interval, new Part3());
	}



	//
	// Render
	//
	this.draw = function()
	{
		ctx.translate(scrollX, scrollY);
		this.bg2.draw(scrollX, scrollY);
		this.fadeIn.draw(scrollX);
		this.fadeOut.draw(scrollX);
	}
	
}
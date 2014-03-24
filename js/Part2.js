function Part2()
{

	//
	// Vars
	//
	this.bg2 = new Background("images/background2.png");
	this.fadeIn = new FadeIn(2248, 20);
	this.fadeOut = new FadeOut(3320, 30, 20);
	
	this.slides = [
		//new Slide(2330, 20, 800),
		new Slide(2490, 20, 800), // Sys -> GL
		new Slide(2630, 20, 800), // GL -> Maths
		new Slide(2750, 20, 800), // Maths -> SQL
		new Slide(2950, 20, 800), // SQL -> Web
		new Slide(3130, 20, 800), // Web -> OLPC
		new Slide(3310, 60, 2400), // OLPC -> FadeOut
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
		//ctx.translate(scrollX, scrollY);
		this.bg2.draw(scrollX, scrollY);
		this.fadeIn.draw(scrollX);
		this.fadeOut.draw(scrollX);
	}
	
}
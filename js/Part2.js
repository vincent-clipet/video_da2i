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
		new Slide(2450, 20, 800), // Sys -> GL // 10 sec
		new Slide(2620, 20, 800), // GL -> Maths // 9 sec
		new Slide(2790, 20, 800), // Maths -> SQL // 10 sec
		new Slide(2960, 20, 800), // SQL -> Web // 10 sec
		new Slide(3130, 20, 800), // Web -> OLPC // 10 sec
		new Slide(3310, 60, 2400), // OLPC -> FadeOut // 10 sec
	];
	
	
	
	//
	// Init
	//
	this.init = function()
	{
		scrollX = 0;
		scrollY = 0;
		speed = 1.0;
	}
 

	//
	// Update
	//
	this.update = function()
	{
		for (key in this.slides)
		{
			this.slides[key].update();
			
			if (this.slides[key].isInProgress())
				scrollX -= this.slides[key].speed;
		}
		
		this.fadeOut.update();
		this.fadeIn.update();
		
		if (this.fadeOut.mustChangePart())
			nextPart(new Part3());
	}



	//
	// Render
	//
	this.draw = function()
	{
		this.bg2.draw();
		this.fadeIn.draw();
		this.fadeOut.draw();
	}
	
}
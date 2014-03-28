function Part4()
{

	//
	// Vars
	//
	this.bg4 = new Background("images/background4.png");
	this.fadeIn = new FadeIn(5047, 20);
	
	
	
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
		this.fadeIn.update();
		
		if (this.fadeIn.hasEnded())
			pause = true;
	}



	//
	// Render
	//
	this.draw = function()
	{
		this.bg4.draw();
		this.fadeIn.draw();
	}
	
}
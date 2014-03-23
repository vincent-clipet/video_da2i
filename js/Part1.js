function Part1()
{

	//
	// Vars
	//
	this.boy = new Sprite(210, canvas.height - 19 - 87, "images/spritesBoy.png", [
		[0, 0, 43, 88],
		[43, 0, 43, 87],
		[86, 0, 43, 88],
		[129, 0, 43, 87]
	], 0);
	this.girl = new Sprite(260, canvas.height - 19 - 81, "images/spritesGirl.png", [
		[0, 0, 39, 81],
		[39, 0, 40, 81],
		[79, 0, 39, 81],
		[118, 0, 38, 81]
	], 1);
	this.bg1 = new Background("images/background.png");
	this.anims = [
		new Anim(60, 160, 2),
		new Anim(450, 560, 1.2),
		new Anim(1150, 1240, 1.2),
		new Anim(1650, 1800, 1.4)
	];
	this.tree = new SchoolTree(880, 0, 0, "images/tree.png", this.anims);
	this.nextFade = new FadeOut(2200, 30, 20);
	
	
	
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
		scrollX -= speed;
		
		this.boy.move(speed, 0);
		this.boy.update();
		this.girl.move(speed, 0);
		this.girl.update();
		this.tree.move(speed, 0);
		this.tree.update();

		this.nextFade.update();
		
		if (this.nextFade.mustChangePart())
			nextPart(interval, new Part2());
	}



	//
	// Render
	//
	this.draw = function()
	{
		ctx.translate(scrollX, scrollY);
		this.bg1.draw(scrollX, scrollY);
		this.tree.draw();
		this.boy.draw();
		this.girl.draw();
		this.nextFade.draw(scrollX);
	}
	
}
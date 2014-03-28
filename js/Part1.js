function Part1(textures)
{

	//
	// Vars
	//
	this.boy = new Sprite(70, 534, "images/spritesBoy.png", [
		[0, 0, 43, 88],
		[43, 0, 43, 87],
		[86, 0, 43, 88],
		[129, 0, 43, 87]
	], 0);
	this.girl = new Sprite(120, 540, "images/spritesGirl.png", [
		[0, 0, 39, 81],
		[39, 0, 40, 81],
		[79, 0, 39, 81],
		[118, 0, 38, 81]
	], 1);
	this.bg1 = new Background("images/background.png", [
		new TextSign(800, 30, 5, 5, 412, 97, 2, "images/signs.png"),
		new TextSign(1500, 230, 2, 104, 413, 203, 1.95, "images/signs.png"),
		new TextSign(2200, 70, 4, 205, 464, 333, 1.9, "images/signs.png"),
		new TextSign(2900, 150, 2, 335, 484, 465, 1.85, "images/signs.png"),
		new TextSign(3650, 50, 4, 467, 474, 535, 1.80, "images/signs.png")
	]);
	this.anims = [
		new Anim(60, 160, 2),
		new Anim(450, 560, 1.2),
		new Anim(1150, 1240, 1.2),
		new Anim(1650, 1800, 1.4)
	];
	this.tree = new SchoolTree(880, 0, 0, "images/tree.png", this.anims);
	this.fadeIn = new FadeIn(1, 20);
	this.fadeOut = new FadeOut(2200, 30, 20);
	
	
	
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
		scrollX -= speed / 2.0;
		
		this.bg1.move(-speed / 2.0, 0);
		this.boy.move(speed * 0.3, 0);
		this.girl.move(speed * 0.3, 0);
		
		this.boy.update();
		this.girl.update();
		this.tree.update();
		this.fadeIn.update();
		this.fadeOut.update();
		
		if (this.fadeOut.mustChangePart())
			nextPart(new Part2());
	}



	//
	// Render
	//
	this.draw = function()
	{
		this.bg1.draw();
		this.tree.draw();
		this.boy.draw();
		this.girl.draw();
		this.fadeIn.draw();
		this.fadeOut.draw();
	}
	
}
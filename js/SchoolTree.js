function SchoolTree(x, y, sy, imageName, anims)
{
	this.x = x;
	this.y = y;
	this.sy = sy;
	this.image = imagesList[imageName];
	this.anims = anims;

	this.scroll = function (dy)
	{
		this.sy -= dy;
	}

	this.move = function (dx, dy)
	{
		this.x += dx;
		this.y += dy;
	}

	this.update = function ()
	{
		for (var i = 0; i < anims.length; i++)
		{
			var a = this.anims[i];
			a.update();

			if (a.isInProgress())
				this.scroll(a.speed);
		}
	}

	this.draw = function ()
	{
		ctx.drawImage(
			this.image,
			0, 1290 + this.sy,
			400, 640,
			this.x, this.y,
			400, 640
		)
	};
};
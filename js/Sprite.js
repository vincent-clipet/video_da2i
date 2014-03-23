function Sprite(x, y, imageName, cropCoord, currSprite)
{
	this.x = x;
	this.y = y;
	this.image = new Image();
	this.image.src = imageName;
	this.cropCoord = cropCoord;
	this.currSprite = currSprite;

	this.move = function (dx, dy)
	{
		this.x += dx;
		this.y += dy;
	}

	this.update = function ()
	{
		if (frame % 4 == 0)
		{
			this.currSprite++;

			if (this.currSprite >= this.cropCoord.length)
				this.currSprite = 0;
		}
	}

	this.draw = function ()
	{
		ctx.drawImage(
			this.image,
			this.cropCoord[this.currSprite][0], this.cropCoord[this.currSprite][1],
			this.cropCoord[this.currSprite][2], this.cropCoord[this.currSprite][3],
			this.x, this.y,
			this.cropCoord[this.currSprite][2], this.cropCoord[this.currSprite][3]
		)
	}
}
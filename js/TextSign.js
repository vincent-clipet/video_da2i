function TextSign(x, y, sx, sy, width, height, factor, imageName)
{
	this.x = x;
	this.y = y;
	this.sx = sx;
	this.sy = sy;
	this.width = width;
	this.height = height;
	this.factor = factor;
	this.image = imagesList[imageName];

	this.move = function (dx, dy)
	{
		this.x += dx * factor * speed / 2.0;
		this.y += dy;
	}
	

	this.draw = function ()
	{
		ctx.drawImage(
			this.image,
			this.sx, this.sy,
			this.width, this.height,
			this.x, this.y,
			this.width, this.height
		);
	}
}
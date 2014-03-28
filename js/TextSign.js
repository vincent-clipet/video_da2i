function TextSign(x, y, sx, sy, sx2, sy2, factor, imageName)
{
	this.x = x;
	this.y = y;
	this.sx = sx;
	this.sy = sy;
	this.width = sx2 - sx;
	this.height = sy2 - sy;
	this.factor = factor;
	this.image = imagesList[imageName];

	this.move = function (dx, dy)
	{
		this.x += dx * 2.0 * factor;
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
function Background(imageName)
{
	this.x = 0;
	this.y = 0;
	this.image = new Image();
	this.image.src = imageName;

	this.move = function (dx, dy)
	{
		this.x += dx;
		this.y += dy;
	};
	
	this.draw = function (offsetX, offsetY)
	{
		ctx.drawImage(this.image, offsetX + this.x, offsetY + this.y);
	};
};
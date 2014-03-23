function Background(imageName)
{
	this.image = new Image();
	this.image.src = imageName;

	this.draw = function (offsetX, offsetY)
	{
		ctx.drawImage(this.image, offsetX, offsetY);
	};
};
function Background(imageName, textSigns)
{
	this.x = 0;
	this.y = 0;
	this.image = imagesList[imageName];
	this.textSigns = textSigns;

	this.move = function (dx, dy)
	{
		this.x += dx;
		this.y += dy;
		
		for (sign in this.textSigns)
			this.textSigns[sign].move(dx, dy);
	};
	
	this.draw = function ()
	{
		ctx.drawImage(this.image, scrollX + this.x, scrollY + this.y);
		
		for (key in this.textSigns)
		{
			var sign = this.textSigns[key];
			//sign.draw(sign.image, scrollX + this.x, scrollY + this.y);
			sign.draw();
		}
	};
};
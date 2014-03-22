function Sprite(x, y, imageName, cropCoord)
{
	this.x = x;
	this.y = y;
	this.image = new Image();
    this.image.src = imageName;
	this.cropCoord = cropCoord;
	this.currSprite = 0;
	
	this.move = function(dx, dy) {
		this.x += dx;
		this.y += dy;
	}
	
	this.nextSprite = function() {
		this.currSprite++;
		
		if (this.currSprite >= this.cropCoord.length)
			this.currSprite = 0;
	}
	
	this.draw = function(ctx) {
		ctx.drawImage(
			this.image,
			this.cropCoord[this.currSprite][0], this.cropCoord[this.currSprite][1],
			this.cropCoord[this.currSprite][2], this.cropCoord[this.currSprite][3],
			this.x, this.y,
			this.cropCoord[this.currSprite][2], this.cropCoord[this.currSprite][3]
		)
	};
};


function Background(imageName)
{
	this.image = new Image();
    this.image.src = imageName;
	
	this.draw = function(ctx, offsetX, offsetY) {
		ctx.drawImage(this.image, offsetX, offsetY);
	};
};
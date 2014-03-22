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

	this.update = function (frame)
	{
		if (frame % 4 == 0)
		{
			this.currSprite++;

			if (this.currSprite >= this.cropCoord.length)
				this.currSprite = 0;
		}
	}

	this.draw = function (ctx)
	{
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

	this.draw = function (ctx, offsetX, offsetY)
	{
		ctx.drawImage(this.image, offsetX, offsetY);
	};
};


function SchoolTree(x, y, sy, imageName, anims)
{
	this.x = x;
	this.y = y;
	this.sy = sy;
	this.image = new Image();
	this.image.src = imageName;
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

	this.update = function (frame)
	{
		for (var i = 0; i < anims.length; i++)
		{
			var a = this.anims[i];
			a.update(frame);

			if (a.isInProgress(frame))
				this.scroll(a.speed);
		}
	}

	this.draw = function (ctx)
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


function Anim(start, end, speed)
{
	this.start = start;
	this.end = end;
	this.speed = speed;
	this.val = 0.0;

	this.update = function (frame)
	{
		if (this.isInProgress(frame))
			this.val += this.speed;
	}

	this.isInProgress = function (frame)
	{
		return (frame >= this.start && frame < this.end);
	}
};


function Fade(start, end, timeStopped)
{
	this.start = start;
	this.end = end;
	this.val = 0.0;
	this.timeStopped = timeStopped;
	var duration = this.end - this.start - this.timeStopped;
	this.interval = 1.0 / duration;

	this.update = function (frame)
	{
		if (this.isInProgress(frame))
		{
			if (frame < this.start + duration) // Fade out
				this.val += this.interval;
			else if (frame < this.start + duration + this.timeStopped) // Time stopped
				this.val = 1.0;
			else // Fade in
				this.val -= this.interval;
		}
	}

	this.draw = function (ctx, scrollX)
	{
		ctx.fillStyle = "rgba(0,0,0," + this.val + ")";
		ctx.fillRect(-scrollX, 0, 1280, 640);
	}

	this.isInProgress = function (frame)
	{
		return (frame >= this.start && frame < this.end);
	}
};
function Anim(start, end, speed)
{
	this.start = start;
	this.end = end;
	this.speed = speed;
	this.val = 0.0;

	this.update = function ()
	{
		if (this.isInProgress())
			this.val += this.speed;
	}

	this.isInProgress = function ()
	{
		return (frame >= this.start && frame < this.end);
	}
};
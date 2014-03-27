function Anim(start, end, speedAnim)
{
	this.start = start;
	this.end = end;
	this.speed = speedAnim;
	this.val = 0.0;

	this.update = function ()
	{
		if (this.isInProgress())
			this.val += this.speed * speed;
	}

	this.isInProgress = function ()
	{
		return (frame >= this.start && frame < this.end);
	}
};
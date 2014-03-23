function FadeIn(start, timeFadeIn)
{
	this.start = start;
	this.timeFadeIn = timeFadeIn;
	this.end = start + timeFadeIn;
	this.val = 1.0;
	this.interval = 1.0 / timeFadeIn;

	this.update = function()
	{
		if (frame == this.end - 1) // Time stopped
			this.val = 0.0;
		else if (this.isInProgress())
			this.val -= this.interval;
	}

	this.draw = function (scrollX)
	{
		if (this.isInProgress())
		{
			ctx.fillStyle = "rgba(0,0,0," + this.val + ")";
			ctx.fillRect(0, 0, 1280, 640);
		}
	}

	this.isInProgress = function ()
	{
		return (frame >= this.start && frame < this.end);
	}
	
};
function FadeOut(start, timeFadeOut, timeStopped)
{
	this.start = start;
	this.timeFadeOut = timeFadeOut;
	this.timeStopped = timeStopped;
	this.val = 0.0;
	this.interval = 1.0 / timeFadeOut;
	this.frameNextFunction = this.start + this.timeFadeOut + this.timeStopped - 1;

	this.update = function()
	{
		if (this.isInProgress())
		{
			if (frame < this.start + this.timeFadeOut) // Fade out
				this.val += this.interval;
			else if (frame < this.start + this.timeFadeOut + this.timeStopped) // Time stopped
				this.val = 1.0;
			else // Fade in
				this.val -= this.interval;
		}
	}

	this.draw = function (scrollX)
	{
		ctx.fillStyle = "rgba(0,0,0," + this.val + ")";
		ctx.fillRect(-scrollX, 0, 1280, 640);
	}
	
	this.mustChangePart = function()
	{
		return (frame == this.frameNextFunction);
	}

	this.isInProgress = function ()
	{
		return (frame >= this.start && frame < this.frameNextFunction);
	}
};
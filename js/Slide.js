function Slide(start, end, endOffset)
{
	this.start = start;
	this.end = end;
	this.endOffset = endOffset;
	
	this.totalDuration = this.end - this.start;
	this.accelFrames = this.totalDuration * 2.5 / 10.0;
	this.endAcceleration = this.start + this.accelFrames;
	this.startDeceleration = this.end - this.accelFrames;
	
	this.maxSpeed = this.endOffset * (2.0/3.0) / (this.totalDuration / 2.0);
	this.val = 0;
	this.speed = 0;
	//this.accel = 0;
	this.factor = this.maxSpeed / this.accelFrames;

	this.update = function()
	{
		if (this.isInProgress())
		{
			console.log(this);
			console.log(scrollX);
		
			/*if (frame == this.endAcceleration)
				this.accel = 0;*/
				
			/*if (frame == this.end)
			{
				this.accel = 0;
				this.speed = 0;
			}*/
			
			if (this.speed > this.maxSpeed)
				this.speed = this.maxSpeed;
				
			if (frame == this.end - 1)
			{
				this.speed = 0;
				this.factor = 0;
				this.val = this.endOffset;
			}
		
			if (frame < this.endAcceleration) // Acceleration
			{
				//this.accel += this.factor;
				this.speed += this.factor; //this.speed += this.accel;
				this.val += this.speed;
			}
			else if (frame >= this.endAcceleration && frame < this.startDeceleration) // Constant speed
			{
				this.val += this.speed;
			}
			else if (frame >= this.startDeceleration) // Deceleration
			{
				//this.accel -= this.factor;
				this.speed -= this.factor; //this.speed -= this.accel;
				this.val += this.speed;
			}
		}
	}

	this.isInProgress = function ()
	{
		return (frame >= this.start && frame < this.end);
	}
	
};
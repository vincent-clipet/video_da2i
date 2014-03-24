//
// Canvas
//
var canvas = document.getElementById("da2i");
canvas.focus();
var ctx = canvas.getContext("2d");

var part1 = null;

window.onload = function()
{
	currentPart = new Part1();
	part1 = currentPart;
	currentPart.init();
	interval = setInterval(update, 1); // DEBUG
	pause = false;
};



//
// Vars
//
var pause = true;
var frame = 0;
var scrollX = null;
var scrollY = null;
var speed = 0.5;
var frameInterval = 20; // Change speed here
var interval = null;
var fullspeedFrame = 1;//4380; //3320; //2180;// DEBUG
var currentPart = null;



//
// Utils
//
canvas.addEventListener('keydown', function (e)
{
	if (e.keyCode === 32)
		pause = !pause;
	draw();
}, false);

var nextPart = function (intervalToCancel, newPart)
{
	currentPart = newPart;
	currentPart.init();
	currentPart.update();
}



//
// Update
//
var update = function()
{
	if (! pause)
	{
		frame++;
		
		if (frame % 20 == 0) // DEBUG
			console.log("frame = " + frame);
		
		// DEBUG ========================================
		if (frame == fullspeedFrame)
		{
			clearInterval(interval);
			interval = setInterval(update, frameInterval);
		}
		// ==============================================
		
		currentPart.update();
		draw();
	}
}



//
// Draw
//
var draw = function()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	currentPart.draw();
	ctx.restore();
}

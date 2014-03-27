//
// Canvas
//
var canvas = document.getElementById("da2i");
canvas.focus();
var ctx = canvas.getContext("2d");



//
// Vars
//
var pause = true;
var frame = 0;
var initSpeed = 1.5;
var speed = initSpeed;
var realFrame = 0;
var frameInterval = 50;
var interval = null;

var currentPart = null;
var part1 = null;
var scrollX = null;
var scrollY = null;

var fullspeedFrame = 3320;//4380; //3320; //2180;// DEBUG
var fullspeed = false;

var imagesUrl = [
	"images/background.png",
	"images/background2.png",
	"images/background3.png",
	"images/background4.png",
	"images/spritesBoy.png",
	"images/spritesGirl.png",
	"images/tree.png",
	"images/sign1.png"
];
var count = imagesUrl.length;
var imagesList = new Array()

for (img in imagesUrl)
{
	var url = imagesUrl[img];
	imagesList[url] = new Image();
	imagesList[url].src = url;
	imagesList[url].onload = function()
	{
		count--;
		
		if (count == 0)
		{
			currentPart = new Part1();
			part1 = currentPart;
			currentPart.init();
			
			if (fullspeedFrame == null)
				interval = setInterval(update, frameInterval);
			else
			{
				interval = setInterval(update, 1);
				fullspeed = true;
			}
				
			pause = false;
		}
	}
}



//
// Utils
//
canvas.addEventListener('keydown', function (e)
{
	if (e.keyCode === 32)
		pause = !pause;
	draw();
}, false);

var nextPart = function (newPart)
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
		realFrame++;
		frame += speed;
		
		if (frame % 20 == 0) // DEBUG
		{
			console.log("realFrame = " + realFrame);
			console.log("frame = " + frame);
		}
		
		// DEBUG ========================================
		if (frame >= fullspeedFrame && fullspeed)
		{
			clearInterval(interval);
			interval = setInterval(update, frameInterval);
			fullspeed = false;
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

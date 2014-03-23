 // Canvas
var canvas = document.getElementById("da2i");
canvas.focus();
var ctx = canvas.getContext("2d");

window.onload = function ()
{
	pause = false;
};


var pause = true;
var frame = 0;
var scrollX = null;
var scrollY = null;
var speed = 0.5;
var frameInterval = 10;
var nextFade = null;






 ///////////
 // UTILS //
 ///////////


canvas.addEventListener('keydown', function (e)
{
	if (e.keyCode === 32)
		pause = !pause;
	draw();
}, false);

var interval = null;

var cancelInterval = function (toCancel, exec)
{
	clearInterval(toCancel);
	interval = setInterval(exec, frameInterval);
}
	
	
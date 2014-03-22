        //////////
        // INIT //
        //////////


        // Canvas
        var canvas = document.getElementById("da2i");
        canvas.focus();
        var ctx = canvas.getContext("2d");

        var pause = false;
        var frame = 0;
		var scrollX = 0;
		var scrollY = 0;
		var speed = 0.5;

		// Entities
		//var boy = new Sprite(370, canvas.height - 19 - 44, "images/spritesBoy.png", [ [0, 0, 22, 44], [22, 0, 21, 44], [43, 0, 21, 44], [64, 0, 22, 44] ]);
		//var girl = new Sprite(400, canvas.height - 19 - 41, "images/spritesGirl.png", [ [0, 0, 20, 41], [20, 0, 20, 41], [40, 0, 19, 41], [59, 0, 19, 41] ]);
		var boy = new Sprite(210, canvas.height - 19 - 87, "images/spritesBoy.png", [ [0, 0, 43, 88], [43, 0, 43, 87], [86, 0, 43, 88], [129, 0, 43, 87] ], 0);
		var girl = new Sprite(260, canvas.height - 19 - 81, "images/spritesGirl.png", [ [0, 0, 39, 81], [39, 0, 40, 81], [79, 0, 39, 81], [118, 0, 38, 81] ], 1);
		var bg = new Background("images/background.png");
		
		var anims = new Array();
		anims[0] = new Anim(0, 145, 3);
		anims[1] = new Anim(560, 660, 2);
		anims[2] = new Anim(1150, 1230, 2);
		anims[3] = new Anim(1650, 1800, 2);
		var tree = new SchoolTree(980, 0, 0,  "images/tree.png", anims);
		




        ////////////
        // UPDATE //
        ////////////


        

        function update()
		{
            if (! pause)
            {
                frame++;
				
				if (frame % 20 == 0)
					console.log("frame = " + frame);
				
				if (frame % 4 == 0)
				{
					boy.nextSprite();
					girl.nextSprite();
				}
				
				scrollX -= speed;
                boy.move(speed, 0);
				girl.move(speed, 0);
				tree.move(speed, 0);
				tree.update(frame);
            }
			
            draw();
        }







        ////////////
        // RENDER //
        ////////////


        function draw()
		{
			ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
			ctx.translate(scrollX, scrollY);
			
			bg.draw(ctx, scrollX, scrollY);
			tree.draw(ctx);
			boy.draw(ctx);
			girl.draw(ctx);
			
            ctx.restore();
        }







        ///////////////
        // LISTENERS //
        ///////////////


        canvas.addEventListener('keydown', function (e) {
            if (e.keyCode === 32)
                pause = ! pause;
            draw();
        }, false);







        /////////
        // RUN //
        /////////

        var myTimer = setInterval(update, 50);
        draw();
        
        
        
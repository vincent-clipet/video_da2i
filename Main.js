         //////////
         // INIT //
         //////////
         // Canvas
        var canvas = document.getElementById("da2i");
        canvas.focus();
        window.onload = function () {
            pause = false;
        };
        var ctx = canvas.getContext("2d");

        var pause = true;
        var frame = 0;
        var scrollX = 0;
        var scrollY = 0;
        var speed = 0.5;
        var frameInterval = 10;

         // Entities
        var boy = new Sprite(210, canvas.height - 19 - 87, "images/spritesBoy.png", [
            [0, 0, 43, 88],
            [43, 0, 43, 87],
            [86, 0, 43, 88],
            [129, 0, 43, 87]
        ], 0);
        var girl = new Sprite(260, canvas.height - 19 - 81, "images/spritesGirl.png", [
            [0, 0, 39, 81],
            [39, 0, 40, 81],
            [79, 0, 39, 81],
            [118, 0, 38, 81]
        ], 1);
        var bg = new Background("images/background.png");

        var anims = new Array();
        anims[0] = new Anim(60, 160, 2);
        anims[1] = new Anim(450, 560, 1.2);
        anims[2] = new Anim(1150, 1240, 1.2);
        anims[3] = new Anim(1650, 1800, 1.4);
        var tree = new SchoolTree(880, 0, 0, "images/tree.png", anims);

        var fades = new Array();
        fades[0] = new Fade(2200, 2280, 20);




         ////////////
         // UPDATE //
         ////////////




        function update() {
            if (!pause) {
                frame++;

                if (frame % 20 == 0) // DEBUG
                    console.log("frame = " + frame);

                scrollX -= speed;
                boy.move(speed, 0);
                boy.update(frame);
                girl.move(speed, 0);
                girl.update(frame);
                tree.move(speed, 0);
                tree.update(frame);

                for (var key in fades)
                    fades[key].update(frame);
            }

            draw();
        }




         ////////////
         // RENDER //
         ////////////


        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.translate(scrollX, scrollY);

            bg.draw(ctx, scrollX, scrollY);
            tree.draw(ctx);
            boy.draw(ctx);
            girl.draw(ctx);

            for (var key in fades)
                fades[key].draw(ctx, scrollX);

            ctx.restore();
        }




         ///////////////
         // LISTENERS //
         ///////////////


        canvas.addEventListener('keydown', function (e) {
            if (e.keyCode === 32)
                pause = !pause;
            draw();
        }, false);




         /////////
         // RUN //
         /////////

        var myTimer = setInterval(update, frameInterval);
        draw();
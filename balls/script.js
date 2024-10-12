let g = 0.2;

function fire(initVelX, initVelY) {
    const ball = document.getElementById("ball")
    let height = window.innerHeight;
    let width = window.innerWidth;

    let x = 0, y = 0;
    let init_x = 120;
    let init_y = 30;

    let id = null;
    let t = 0;


    id = setInterval(() => {
        down();
        side();
        t++;

    }, 10);

    function down() {
        let y = init_y + initVelY * t + 1 / 2 * g * t * t;
        if (y < height - 50) {
            ball.style.top = y + "px";
        }

        else {
            ball.style.top = height - 50 + "px";
            clearInterval(id);
        }

    }


    function side() {
        console.log("here");
        x = init_x + initVelX * t;
        console.log(t);

        if (x < width - 50) {
            ball.style.left = x + "px";
        }

        else {
            ball.style.left = width - 50 + "px";
            return;
        }
    }


}
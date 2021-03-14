const SNOW_FLAKE_COUNT = 3000;
const MAX_SNOWFLAKE_SIZE = 7;

const canvasHeight = window.innerHeight
const canvasWidth = window.innerWidth
let snowflakes = []
let mousex;
let mousey;

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

class Snowflake {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = Math.random();
        this.speedY = Math.random();
        this.size = Math.random() * MAX_SNOWFLAKE_SIZE;
    }
  }

appStart();

function appStart() {
    configureCanvas()
    for (let i = 0; i < SNOW_FLAKE_COUNT; i++) {
        snowflakes[i] = new Snowflake(ctx)
    }
    draw();
    document.addEventListener("mousemove", avoidMouse, false);
}

function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    for (let i = 0; i < snowflakes.length; i++) {

        ctx.moveTo(snowflakes[i].x, snowflakes[i].y);
        ctx.arc(snowflakes[i].x, snowflakes[i].y, snowflakes[i].size, 0, 2 * Math.PI);
    }
    ctx.fill();
    fall();
    ctx.closePath();
    window.requestAnimationFrame(draw);
}


function fall() {
    for (let i = 0; i < snowflakes.length; i++) {
        if (snowflakes[i].x > canvasWidth) {
            snowflakes[i].x = -50
        } else if (snowflakes[i].y > canvasHeight) {
            snowflakes[i].y = -50
            //snowflakes.push(new Snowflake(ctx))
        } else if (snowflakes[i].x < 0 && snowflakes[i].speedX < 0) {
            snowflakes[i].x = canvasWidth;
        }

        ctx.moveTo(snowflakes[i].speedX, snowflakes[i].speedY)
        snowflakes[i].y += snowflakes[i].speedY;
        snowflakes[i].x += snowflakes[i].speedX;
        checkDist(i);
    }
}

function avoidMouse(e) {
    mousex = e.clientX - 8;     // Get the horizontal coordinate
    mousey = e.clientY - 8;     // Get the vertical coordinate
    for (let i = 0; i < snowflakes.length; i++) {
        checkDist(i);
    }
}

function checkDist(i) {
    let a = snowflakes[i].x - mousex;
    let b = snowflakes[i].y - mousey;
    let dist = Math.sqrt(a * a + b * b);
    if (dist < 100) {
        if (snowflakes[i].x < mousex && snowflakes[i].y > mousey) {
            snowflakes[i].speedX *= -1;
            snowflakes[i].x--;
            snowflakes[i].y++;
        } else if (snowflakes[i].x < mousex && snowflakes[i].y < mousey) {
            snowflakes[i].speedX *= -1;
            snowflakes[i].x--;
            snowflakes[i].y--;
        } else if (snowflakes[i].x > mousex && snowflakes[i].y > mousey) {
            snowflakes[i].speedX *= -1;
            snowflakes[i].x++;
            snowflakes[i].y++;
        } else {
            snowflakes[i].speedX *= -1;
            snowflakes[i].x++;
            snowflakes[i].y--;
        }
    }
}

function configureCanvas () {
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    canvas.style.border = "1px solid #333"
    canvas.style.background = "darkblue";
    canvas.style.position = 'fixed'
    canvas.style.left = canvas.style.top = '0'
    document.getElementById("body").appendChild(canvas);
}


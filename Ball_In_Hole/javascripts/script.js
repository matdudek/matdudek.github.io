window.addEventListener("deviceorientation", manipulation,false);
let width = window.innerWidth;
let height = window.innerHeight;
let canvas = document.getElementById("myCanvas")
canvas.width = 600 
canvas.height = 600
let ctx = canvas.getContext("2d");
let ball = new Ball(200,200,ctx)
let hole ;
let beta = 0;
let gamma = 0;


function appStart(){
    hole = new Hole();
    move();
    time();
}
appStart();

function manipulation(e){
    beta = e.beta;
    gamma= e.gamma;
    if(e.beta> 90) {
        beta = 90;
    }else if(e.beta< -90){
        beta = -90;
    }
    if(e.gamma> 90) {
        gamma = 90;
    }else if(e.gammaa< -90){
        gamma = -90;
    }
    ball.physics(beta,gamma);
}


function move(){
    ctx.clearRect(0, 0, canvas.width, canvas.width); 
    hole.draw();
    ball.draw();
    ball.physics();
    ball.colisions();
    window.requestAnimationFrame(move);
}



function time(){
    let time = 3000
    let timer = setInterval(function(){
        if(time>0){
        time-=1; 
        document.getElementById("info").innerHTML = "Time Left:" + time
        }
        else{
            timer = null;
        }
    }, 10);
}

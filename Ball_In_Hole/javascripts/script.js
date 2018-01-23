window.addEventListener("deviceorientation", manipulation,false);
let width = window.innerWidth;
let height = window.innerHeight;
let canvas = document.getElementById("myCanvas")
canvas.width = 600;
canvas.height = 600;
let ctx = canvas.getContext("2d");
let ball = new Ball(200,200,ctx)
let BluePoint;
let GreenPoint;
let RedPoint;
let beta = 0;
let gamma = 0;
let timeLeft = 30;
let points = 0;
function appStart(){
    BluePoint = new BlueHole();
    GreenPoint = new GreenHole();
    RedPoint = new RedHole();
    RedPoint.checkPosition();
    move();
    time();
    document.getElementById("points").innerHTML = "Points: 0";
    document.getElementById("info").innerHTML = "Time Left: 30";
    document.getElementById("startGame").style.display = "none";
}


function manipulation(e){
    if(timeLeft>0){
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
}


function move(){
    ctx.clearRect(0, 0, canvas.width, canvas.width); 
    BluePoint.draw();
    GreenPoint.draw();
    RedPoint.draw();
    ball.draw();
    ball.physics();
    ball.colisions();
    window.requestAnimationFrame(move);
}



function time(){
    
    let timer = setInterval(function(){
        if(timeLeft>0){
            timeLeft-=1; 
        document.getElementById("info").innerHTML = "Time Left:" + timeLeft
        }
        else{
            clearInterval(timer);
            alert("You lost, Point: "+ points);
            document.getElementById("startGame").style.display = "block";
        }
    }, 1000);
}

function Ball(x,y){
    this.x          = x;
    this.y          = y;
    this.radius     = 10;
    this.draw       = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "#46211A"
        ctx.fill();
        ctx.closePath()
    }
    this.physics    = function(){
        GreenPoint.collisionWithPlayer();
        RedPoint.collisionWithPlayer();
        if(((this.x>canvas.width-this.radius) && gamma>0)||((this.x<this.radius) && gamma<0))
        {
            this.x= this.x
        }else{
            this.x += gamma/25;
        }

        if(((this.y>canvas.height-this.radius) && beta>0||((this.y<this.radius) && beta<0)))
        {
            this.y= this.y
        }else{
            this.y += beta/25;
        }
    }
    this.colisions  = function(){
            this.ablue = Math.pow(this.x - BluePoint.x,2)
            this.bblue = Math.pow(this.y-BluePoint.y,2)
            this.distBlue = (Math.sqrt(this.ablue+this.bblue)-(this.radius+BluePoint.radius))

            this.agreen = Math.pow(this.x - GreenPoint.x,2)
            this.bgreen = Math.pow(this.y-GreenPoint.y,2)
            this.distGreen = (Math.sqrt(this.agreen+this.bgreen)-(this.radius+GreenPoint.radius))

            this.ared = Math.pow(this.x - RedPoint.x,2)
            this.bred = Math.pow(this.y- RedPoint.y,2)
            this.distRED = (Math.sqrt(this.ared+this.bred)-(this.radius+RedPoint.radius))

            if(this.distBlue<0){
                BluePoint = new BlueHole();
                timeLeft+=5;
                points+=5;
                document.getElementById("info").innerHTML = "Time Left:" + timeLeft
                document.getElementById("points").innerHTML ="Points: "+ points;
            }
            if(this.distGreen<0){
                GreenPoint = new GreenHole();
                timeLeft+=1;
                points+=1
                document.getElementById("info").innerHTML = "Time Left:" + timeLeft
                document.getElementById("points").innerHTML ="Points: "+ points;
            }
            if(this.distRED<0){
                RedPoint = new RedHole();
                timeLeft+=10;
                points+=10
                document.getElementById("info").innerHTML = "Time Left:" + timeLeft
                document.getElementById("points").innerHTML ="Points: "+ points;
            }
    }
}

function BlueHole(){
    this.x      = Math.random()*canvas.width;
    this.y      = Math.random()*canvas.height
    this.radius = 10;
    if(((this.x> canvas.width-10)||(this.y>canvas.height-10))||(this.x<10|| this.y < 10)||(this.x > ball.x && this.x < ball.x+10)&&(this.y > ball.y && this.y < ball.y+10)){
        this.x      = Math.random()*canvas.width;
        this.y      = Math.random()*canvas.height
    }
    this.draw   = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y , this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "blue"
        ctx.fill();
        ctx.closePath()
    }
}

function GreenHole(){
    this.x      = Math.random()*canvas.width;
    this.y      = Math.random()*canvas.height
    this.radius = 10;
    if(((this.x> canvas.width-10)||(this.y>canvas.height-10))||(this.x<10|| this.y < 10)||(this.x > ball.x && this.x < ball.x+10)&&(this.y > ball.y && this.y < ball.y+10)){
        this.x      = Math.random()*canvas.width;
        this.y      = Math.random()*canvas.height
    }
    this.draw   = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y , this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "lightgreen"
        ctx.fill();
        ctx.closePath()
    }
    this.collisionWithPlayer = function(){
        this.a = Math.pow(ball.x - GreenPoint.x,2)
        this.b = Math.pow(ball.y-GreenPoint.y,2)
        this.dist = (Math.sqrt(this.a+this.b)-(this.radius+ball.radius))
        if(this.dist < 50){
            if(ball.x < this.x && ball.y > this.y){ 
                this.x -=0.5; 
                this.y +=0.5; 
            }else if(ball.x < this.x && ball.y < this.y){ 
                this.x -=0.5;
                this.y -=0.5;
            }else if(ball.x > this.x && ball.y > this.y){
                this.x +=0.5;
                this.y +=0.5;
            }else{ 
                this.x +=0.5;
                this.y -=0.5;
            }
        }
    }
}

function RedHole(){
    this.x      = Math.random()*canvas.width;
    this.y      = Math.random()*canvas.height
    this.radius = 10;

    this.checkPosition = function(){
        if(((this.x> canvas.width-10)||(this.y>canvas.height-10))||(this.x<10|| this.y < 10)||(this.x > ball.x && this.x < ball.x+10)&&(this.y > ball.y && this.y < ball.y+10)){
            this.x      = Math.random()*canvas.width;
            this.y      = Math.random()*canvas.height
        }
    }
    this.draw   = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y , this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "red"
        ctx.fill();
        ctx.closePath()
    }

    this.collisionWithPlayer = function(){
        this.a = Math.pow(ball.x - RedPoint.x,2)
        this.b = Math.pow(ball.y-RedPoint.y,2)
        this.dist = (Math.sqrt(this.a+this.b)-(this.radius+ball.radius))
        if(this.dist < 100){
            if(ball.x < this.x && ball.y > this.y){ 
                if((this.x>canvas.width-this.radius)||(this.x<this.radius)){this.x= this.x}else{this.x +=2;}
                if((this.y>canvas.height-this.radius)||(this.y<this.radius)){this.y= this.y}else{this.y -=2;}
            }else if(ball.x < this.x && ball.y < this.y){ 
                if((this.x>canvas.width-this.radius)||(this.x<this.radius)){this.x= this.x}else{this.x +=2;}
                if((this.y>canvas.height-this.radius)||(this.y<this.radius)){this.y= this.y}else{this.y +=2;}
            }else if(ball.x > this.x && ball.y > this.y){ 
                if((this.x>canvas.width-this.radius)||(this.x<this.radius)){this.x= this.x}else{this.x -=2;}
                if((this.y>canvas.height-this.radius)||(this.y<this.radius)){this.y= this.y}else{this.y -=2;}
            }else{
                if((this.x>canvas.width-this.radius)||(this.x<this.radius)){this.x= this.x}else{this.x -=2;}
                if((this.y>canvas.height-this.radius)||(this.y<this.radius)){this.y= this.y}else{this.y +=2;}
            }
        }
    }
}


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

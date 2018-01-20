function Ball(x,y){
    this.x          = x;
    this.y          = y;
    this.radius     = 25;
    this.draw       = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "#804040"
        ctx.fill();
        ctx.closePath()
    }
    this.physics    = function(){
        if((this.x>canvas.width-10) && beta>0)
        {
            this.x= this.x
        }else if((this.x<10) && beta<0){
            this.x= this.x
        }else{
            this.x += beta/25;
        }

        if((this.y>canvas.height-10) && gamma>0)
        {
            this.y= this.y
        }else if((this.y<10) && gamma<0){
            this.y= this.y
        }else{
            this.y += gamma/25;
        }
    }
    this.colisions  = function(){
            this.a = Math.pow(this.x - hole.x,2)
            this.b = Math.pow(this.y-hole.y,2)
            this.dist = (Math.sqrt(this.a+this.b)-(this.radius+hole.radius))
            console.log(this.dist)
            if(this.dist<0){
                console.log("hello");
                hole = new Hole();
                this.radius--;
                time+=1000;
            }
    }
}

function Hole(){
    this.x      = Math.random()*canvas.width;
    this.y      = Math.random()*canvas.height
    this.radius = 10;
    if((this.x> canvas.width-10)||(this.y>canvas.height-10)){
        this.x      = Math.random()*canvas.width;
        this.y      = Math.random()*canvas.height
    }else if(this.x<10|| this.y < 10){
        this.x      = Math.random()*canvas.width;
        this.y      = Math.random()*canvas.height
    }else if((this.x > ball.x && this.x < ball.x+10)&&(this.y > ball.y && this.y < ball.y+10)){
        this.x      = Math.random()*canvas.width;
        this.y      = Math.random()*canvas.height
    }
    this.draw   = function(){
        
        ctx.beginPath();
        ctx.arc(this.x,this.y , this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "green"
        ctx.fill();
        ctx.closePath()
    }

}

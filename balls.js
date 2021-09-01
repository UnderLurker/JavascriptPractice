/**@type {HTMLCanvasElement} */

var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
function ball(x,y,r,vx,vy,color){
    this.x=x,
    this.y=y,
    this.radius=r,
    this.vx=vx,
    this.vy=vy;
    this.color=color,
    this.run=function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.closePath();
        ctx.fillStyle=this.color;
        ctx.fill();
        this.x+=this.vx;
        this.y+=this.vy;
        if(this.x+this.radius>=canvas.width){
            this.vx=-this.vx;
            this.x=canvas.width-this.radius;
        }
        if(this.x-this.radius<=0){
            this.vx=-this.vx;
            this.x=this.radius;
        }
        if(this.y+this.radius>=canvas.height){
            this.vy=-this.vy;
            this.y=this.y-this.radius;
        }
        if(this.y-this.radius<=0){
            this.vy=-this.vy;
            this.y=this.radius;
        }
        
    }
};
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

var balls=[];
for(var i=0;i<100;i++){
    var temp=new ball();
    temp.x=Math.floor(Math.random()*canvas.width);
    temp.y=Math.floor(Math.random()*canvas.height);
    temp.radius=Math.floor(Math.random()*20);
    temp.vx=Math.floor(Math.random()*20)-10;
    temp.vy=Math.floor(Math.random()*20)-10;
    temp.color="#"+Math.random().toString(16).substr(-6);
    balls.push(temp);
}

function ballAnimation(){
    requestAnimationFrame(ballAnimation);
    clear();
    for(var circle of balls){
        circle.run();
    }
}

var mouse={
    x:null,
    y:null,
}

window.onmousemove=function(e){
    this.mouse.x=e.clientX;
    this.mouse.y=e.clientY;
}

function point(x,y,vx,vy){
    this.x=x;
    this.y=y;
    this.radius=5;
    this.vx=vx;
    this.vy=vy;
    this.run=function(){
        var color=ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,2.5);
        color.addColorStop(0,"rgba(0,255,0,1)");
        color.addColorStop(1,"rgba(255,255,255,0)")
        ctx.fillStyle=color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.closePath();
        ctx.fill();
        this.x+=this.vx;
        this.y+=this.vy;
        if(this.x+this.radius>=canvas.width){
            this.vx=-this.vx;
            this.x=canvas.width-this.radius;
        }
        if(this.x-this.radius<=0){
            this.vx=-this.vx;
            this.x=this.radius;
        }
        if(this.y+this.radius>=canvas.height){
            this.vy=-this.vy;
            this.y=this.y-this.radius;
        }
        if(this.y-this.radius<=0){
            this.vy=-this.vy;
            this.y=this.radius;
        }
        if(Math.pow(mouse.x-this.x,2)+Math.pow(mouse.y-this.y,2)<=Math.pow(100,2)){
            ctx.strokeStyle="orange";
            console.log(mouse.x+"  "+mouse.y);
            ctx.beginPath();
            ctx.moveTo(mouse.x,mouse.y);
            ctx.lineTo(this.x,this.y);
            ctx.closePath();
            ctx.stroke();
        }
    }
}
var count=300;
var points=[];
var visit=[];
for(var i=0;i<count;i++){
    var x=Math.floor(Math.random()*canvas.width);
    var y=Math.floor(Math.random()*canvas.height);
    var vx=Math.random()-0.5;
    var vy=Math.random()-0.5;
    points.push(new point(x,y,vx,vy));
    visit.push(false);
}

function pointAnimation(){
    requestAnimationFrame(pointAnimation);
    clear();
    for(var i =0;i<count;i++){
        points[i].run();
        // for(var j=0;j<100;j++){
        //     if(j==i||visit[j]) continue;
        //     if(Math.pow(points[i].x-points[j].y,2)+Math.pow(points[i].y-points[j].y,2)<=Math.pow(10,2)){
        //         visit[j]=true;
        //         ctx.strokeStyle="pink";
        //         ctx.beginPath();
        //         ctx.moveTo(points[i].x,points[i].y);
        //         ctx.lineTo(points[j].x,points[j].y);
        //         ctx.closePath();
        //         ctx.stroke();
        //     }
        //     else{
        //         visit[j]=false;
        //     }
        // }
    }
}

pointAnimation();
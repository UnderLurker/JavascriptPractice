/**@type {HTMLCanvasElement} */

var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
var 
/**
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 */
function Color(r,g,b){
    this.r=r;
    this.g=g;
    this.b=b;

}

var mouse={
    x:null,
    y:null,
}

window.onmousemove=function(e){
    this.mouse.x=e.clientX;
    this.mouse.y=e.clientY;
}
/**
 * 
 * @param {number} vx 横向速度
 * @param {number} vy 纵向速度
 * @param {number} w 角速度
 * @param {color} color 颜色
 * @param {number} radius 小球半径
 * @param {number} origin 初始角度
 * @param {number} size 球大小
 */
function spot(w,color,radius,origin,size){
    this.x=radius*Math.cos(origin);
    this.y=radius*Math.sin(origin);
    // this.vx=vx;
    // this,vy=vy;
    this.w=w;
    this.color=color;
    this.radius=radius;
    this.origin=origin;
    this.size=size;
    this.run=function(){
        this.x=mouse.x+this.radius*Math.cos(this.origin);
        this.y=mouse.y+this.radius*Math.sin(this.origin);
        ctx.beginPath();
        ctx.fillStyle="rgb("+color.r+","+color.g+","+color.b+")";
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
        this.origin+=this.w;
    }
}
var count=10;
var spots=[];
for(var i=0;i<count;i++){
    var w=Math.random();
    var color=new Color(Math.floor(Math.random()*255),
                        Math.floor(Math.random()*255),
                        Math.floor(Math.random()*255));
    var radius=Math.random()*20;
    var origin=Math.random()*Math.PI*2;
    var size=Math.random();
    spots.push(new spot(w,color,radius,origin,size));
}

function spotAnimation(){
    requestAnimationFrame(spotAnimation);
    ctx.clearRect(canvas.width,canvas.height);
    for(var i=0;i<count;i++){
        spots[i].run();
    }
}
spotAnimation();
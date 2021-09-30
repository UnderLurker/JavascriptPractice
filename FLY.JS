/** @type {HTMLCanvasElement} */

var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

/**
 * 为绘制傅里叶函数提供的结构
 * @param radius 半径
 * @param angle 角速度
 * @param origin 角度
 */
function r_a(radius,angle,origin){
    this.radius=radius;
    this.angle=angle;
    this.origin=origin;
}

/**
 * 绘制傅里叶函数图像
 * @param {number} x x坐标
 * @param {number} y y坐标
 * @param {r_a} radiusAngles 所有半径
 */
function FLY(x,y,radiusAngles){
    this.x=x;
    this.y=y;
    this.radiusAngles=radiusAngles;
    this.dx=this.x;
    this.dy=this.y;
    this.draw=function(){
        for(var i of this.radiusAngles){
            this.dx+=i.radius*Math.cos(i.origin);
            this.dy+=i.radius*Math.sin(i.origin);
            i.origin+=i.angle;
        }
        console.log(this.dx+" "+this.dy);
        ctx.fillStyle='black';
        ctx.beginPath();
        ctx.arc(this.dx,this.dy,0.1,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
}
var count=5;
var ra=[];
for(var i=0;i<count;i++){
    var radius=Math.random()*0.4;
    var angle=Math.random()/15+0.0005;
    var origin=Math.random()*Math.PI*2;
    ra.push(new r_a(radius,angle,origin));
    
}
var fly=new FLY(400,300,ra);
function Animation(){
    requestAnimationFrame(Animation);
    fly.draw();
}
Animation();
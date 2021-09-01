/**@type {HTMLCanvasElement} */

var canvas=document.getElementById('canvas');
var ctx=canvas.getContext("2d");
var imagePath="./14.jpg";
var image=new Image();
var col=4;
var row=4;
var w=1920/col;
var h=1080/row;
var k=0.5;//放缩系数
/**
 * 
 * @param {Image} image 图片资源
 * @param {Number} x 画图片的x坐标
 * @param {Number} y 画图片的y坐标
 * @param {Number} w 要绘画的宽度
 * @param {Number} h 要绘画的高度
 * @param {Number} row 图片分块的行数
 * @param {Number} col 图片分块的列数
 */
function region(image,x,y,w,h,row,col){
    this.image=image;
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.row=row;
    this.col=col;
    this.draw=function(){
        ctx.drawImage(this.image,this.w*this.row,this.h*this.col,this.w,this.h,this.x,this.y,this.w*k,this.h*k);
    }
}
var images=[];
image.src=imagePath;
image.onload=function(e){
    //ctx.drawImage(image,0,0,192*3,108*3);
    for(var i=0;i<row;i++){
        for(var j=0;j<col;j++){
            var x=Math.random()*(canvas.width-w*0.5);
            var y=Math.random()*(canvas.height-h*0.5);
            images.push(new region(image,x,y,w,h,i,j));
        }
    }
}

var mouse={
    x:null,
    y:null,
}

window.onmousemove=function(e){
    mouse.x=e.clientX;
    mouse.y=e.clientY;
}

canvas.addEventListener("click",function (event) {
    for(var i of images){
        i.draw();
    }
    //ctx.clearRect(0,0,canvas.width,canvas.height);
    console.log(mouse.x+"    "+mouse.y);
});
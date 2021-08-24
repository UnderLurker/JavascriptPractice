/**@type {HTMLCanvasElement} */
var canvas=document.getElementById('can');
var context=canvas.getContext("2d");

function drawFiveAngle(canvasContent,x,y,radius){
    var da=Math.PI/5*4;
    //canvasContent.rotate(-Math.PI/3)

    var color=canvasContent.createLinearGradient(x-radius,y-radius,x+radius,y+radius);
    color.addColorStop(0,"rgba(255,0,0,0.5)");
    color.addColorStop(0.5,"rgba(0,255,0,0.5)");
    color.addColorStop(1,"rgba(0,0,255,0.5)");

    canvasContent.fillStyle=color;
    canvasContent.strokeStyle='brown';
    
    canvasContent.beginPath();
    for(var i=0,angle=0;i<10;i++,angle+=da){
        var rx=radius*(Math.cos(angle));
        var ry=radius*(Math.sin(angle));
        canvasContent.lineTo(rx+x,ry+y);
    }
    canvasContent.stroke();
    //阴影
    canvasContent.shadowOffsetX=5;
    canvasContent.shadowOffsetY=5;
    canvasContent.shadowBlur=1.5;
    canvasContent.shadowColor="rgba(0,0,0,0.5)";
    canvasContent.fill();
    canvasContent.closePath();
    canvasContent.clip();
}
var type=["no-repeat","repeat","repeat-x","repeat-y"];
var image=new Image();
image.src="./file.ico";
var i=0;
image.onload=function(){
    //context.drawImage(image,0,0,192*2,108*2);
    // var pattern=context.createPattern(image,'no-repeat');
    // context.fillStyle=pattern;
    // context.fillRect(0,0,800,600);
    var interval=setInterval(() => {
        context.clearRect(0,0,800,600);
        var pattern=context.createPattern(image,type[i++]);
        if(i==4) i=0;
        context.fillStyle=pattern;
        context.fillRect(0,0,800,600);
    }, 1000);
}
drawFiveAngle(context,300,300,100);
//context.translate(300,300);
var da=0;
// var interval=setInterval(() => {
//     drawFiveAngle(context,0,0,100);
//     context.rotate(da++);
    
// }, 200);

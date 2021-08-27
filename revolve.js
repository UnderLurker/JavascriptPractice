/**@type {HTMLCanvasElement} */


function drawFiveAngle(){
    var canvas=document.getElementById('canvas');
    var canvasContent=canvas.getContext("2d");
    canvasContent.clearRect(0,0,800,600);
    var da=Math.PI/5*4;
    var x=300;
    var y=300;
    var radius=100;
    canvasContent.save();
    canvasContent.translate(x,y);
    var color=canvasContent.createLinearGradient(-radius,-radius,radius,radius);
    color.addColorStop(0,"rgba(255,0,0,0.5)");
    color.addColorStop(0.5,"rgba(0,255,0,0.5)");
    color.addColorStop(1,"rgba(0,0,255,0.5)");
    canvasContent.fillStyle=color;
    canvasContent.strokeStyle='brown';
    var time = new Date();
    canvasContent.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds());
    canvasContent.beginPath();
    for(var i=0,angle=0;i<10;i++,angle+=da){
        var rx=radius*(Math.cos(angle));
        var ry=radius*(Math.sin(angle));
        canvasContent.lineTo(rx,ry);
    }
    canvasContent.stroke();
    //阴影
    canvasContent.shadowOffsetX=5;
    canvasContent.shadowOffsetY=5;
    canvasContent.shadowBlur=1.5;
    canvasContent.shadowColor="rgba(0,0,0,0.5)";
    canvasContent.fill();
    canvasContent.closePath();
    //canvasContent.clip();
    canvasContent.restore();
    window.requestAnimationFrame(drawFiveAngle);
}
window.requestAnimationFrame(drawFiveAngle);

// var type=["no-repeat","repeat","repeat-x","repeat-y"];
// var image=new Image();
// image.src="./file.ico";
// var i=0;
// image.onload=function(){
//     //context.drawImage(image,0,0,192*2,108*2);
//     // var pattern=context.createPattern(image,'no-repeat');
//     // context.fillStyle=pattern;
//     // context.fillRect(0,0,800,600);
//     var interval=setInterval(() => {
//         context.clearRect(0,0,800,600);
//         var pattern=context.createPattern(image,type[i++]);
//         if(i==4) i=0;
//         context.fillStyle=pattern;
//         context.fillRect(0,0,800,600);
//     }, 1000);
// }
// drawFiveAngle(context,300,300,100);


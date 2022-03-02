canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
var mouseEvent="";
var lastpositionofx,lastpositionofy;
var color="black";
var line_width=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}  

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}  

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentpositionofx=e.clientX-canvas.offsetLeft;
    currentpositionofy=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=color; 
    ctx.lineWidth=line_width;

    console.log("last position of x and y =");
    console.log("x = " +lastpositionofx+"y = "+lastpositionofy);
    ctx.moveTo(lastpositionofx,lastpositionofy);
    
    console.log("current position of x and y =");
    console.log("x = " +currentpositionofx+"y = "+currentpositionofy);
    ctx.lineTo(currentpositionofx,currentpositionofy);
    ctx.stroke();
    }
    
lastpositionofx=currentpositionofx;
lastpositionofy=currentpositionofy;

}  
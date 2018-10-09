
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
     

var c = document.getElementById("myCanvast");
var ctx = c.getContext("2d");
ctx.font = "20px Arial";
ctx.strokeText("this is fall semester",20,50);

var c = document.getElementById("myCanvase");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"yellow");
grd.addColorStop(1,"green");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
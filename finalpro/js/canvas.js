//canvas
var c = document.getElementById("myCanvast");
var ctx = c.getContext("2d");
ctx.font = "25px Arial bold";
ctx.strokeText("Annual Cycling Competition",5,60);

var c = document.getElementById("myCanvase");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,80);
grd.addColorStop(0,"yellow");
grd.addColorStop(1,"lightblue");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,70);
function missionYear() {
 var yr = parseFloat(document.getElementById("input").value);   
 var mName = document.getElementById("mission").value;
 var favC = parseFloat(document.getElementById("favcol").value);
     var numOnM = parseFloat(document.getElementById("numM").value);   

var person = {
    name:mName, year:yr,
    favColor:favC, numberOfMiss:numOnM
};
    document.getElementById("output").innerHTML = "In " + person.year  +" you were in the " + person.name + "  mission";

}
missionYear();



//Example based on method
function myAge(){
    var yourName = parseFloat(document.getElementById("uName").value);
    var yourAge = parseFloat(document.getElementById("ega").value);
    
    function person(yourName, yourAge) {
        this.name = yourName;
        this.age = yourAge;
        this.yearOfBirth = bornYear;
    }
    
    function bornYear(){
        return 2018 - this.age;
    }
    
    var newAge = new person(yourName, yourAge);
    document.getElementById("result").innerHTML = newAge.yearOfBirth();
}
myAge();

// Create gradient
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(75,50,5,90,60,80);
grd.addColorStop(0,"yellow");
grd.addColorStop(1,"lightblue");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,70);
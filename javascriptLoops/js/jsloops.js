function schoolYears() {
    var nme = document.getElementById("studentname").value;
    var sem = document.getElementById("semst").value;
	var crdts = parseFloat(document.getElementById("credits").value);
                           
	var ans;
        
	if (crdts >= 0 && crdts < 30) {
	     ans = nme + ", you are a freshman" + ", and in " + sem + " semester"
	   }
	   else if (crdts >= 30 && crdts < 60) {
	     ans = nme + ", you are a sophomore" + ", and in " + sem + " semester"
	   }
	   else if (crdts >= 60 && crdts < 90) {
	     ans = nme + ", you are a Junior" + ", and in " + sem + " semester"
    	} 
	   else if (crdts >= 90 && crdts < 130){
		 ans = nme + ", you are a Senior" + ", and in " + sem + " semester"
		} 
		else {
           window.alert = "Sorry, Please enter your credits correctly"
        };
             
              document.getElementById("Output").innerHTML = ans;
	}
        schoolYears();


//wind chill
function computeMe(){
    var tempo = parseFloat(document.getElementById("temperature").value);
    var speed = parseFloat(document.getElementById("windspeed").value);
    
    document.getElementById("Putme").innerHTML = windChill(tempo, speed).toPrecision(3);      
}
 function windChill(tempo, speed){
        return 35.74 + 0.6215 * tempo - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempo * Math.pow(speed, 0.16);
    }

computeMe();

function arraYem(){
var onef = parseFloat(document.getElementById("marray").value);
    
    var manarray = ["Free shopping", " Volvo", " 1yr rent", " Ford", " Toyota", " Benz", " Ferrari", " Kantanka", " Acura", " Air ticket", " Audi", " trip", " luggage", " Free lunch", " laptop", " Airtime", " Chevrolet", " Lamborghini", " McLaren", " course material", "Rolls Royce"];
    
    if (onef > 20 && onef <= 0) {
        manarray = " Sorry re-enter a number between 0 and 20"
    }
    
    document.getElementById("Otput").innerHTML = manarray[onef];
    
    
}
arraYem();

 function myInteger() {
var intag = parseInt(document.getElementById("integ").value);
var two = 2;
var tag;
var first = 0;
var show = 0;
    for (first = 1; first <= intag ; first += two) {
				     show += first;
				 }
				 tag = "The sum of odd integers is " + show;
				 document.getElementById("outpu").innerHTML = tag;
			 }
		 myInteger();
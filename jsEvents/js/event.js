//onLoad
function loads() {
    var checkScreen = 'ontouchstart' in window;
document.getElementById("loadMe").innerHTML = (checkScreen ? '<b style = "color:green;">' + 'Your device supports touch screen however subsecu  onTouch examples will respond as they should. <br> thank you' : '<b style = "color:red;">'+'WE ARE SORRY, your device does not support touch screen. <br> NB: subsecuent examples will not function'+ '<b>'); 
}


//onClick
function myTime() {
    var time = new Date();
    document.getElementById("dateIt").innerHTML = Date();
}

//ontouch
function sTouch() {
  document.getElementById("touchStart").innerHTML = "you can now enter the information faster";
}

//ontouchend
function tEnd() {
    document.getElementById("touches").innerHTML = "thank you for using your touch screen device";
      }


//for loops, arrays and associative arrays
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
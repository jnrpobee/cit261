function schoolYears() {
    var nme = document.getElementById("studentname").value;
	var crdts = parseFloat(document.getElementById("credits").value);
                           
	var ans;
        
	if (crdts >= 0 && crdts < 30) {
	     ans = nme + ", you are a freshman"
	   }
	   else if (crdts >= 30 && crdts < 60) {
	     ans = nme + ", you are a sophomore"
	   }
	   else if (crdts >= 60 && crdts < 90) {
	     ans = nme + ", you are a Junior"
    	} 
	   else if (crdts >= 90){
		 ans = nme + ", you are a Senior"
		} 
		else {
            window.alert = "Sorry, Please enter your credits correctly"
        };
             
              document.getElementById("Output").innerHTML = ans;
	}
        schoolYears();
/* 
storage in Json
*/
function uInput() {
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("emaiL").value;
  var phone =  document.getElementById("fNumber").value;
  var dateOb = document.getElementById("dateBirth").value;
    var message = document.getElementById("messAge").value;
    
    
    var member = {name: name, email: email, phone: phone, dateOb: dateOb, message: message};
    
    
    var stringMessage = ["Your name ", ", has been successfully registed for the competition. Further information will be sent to ", ". You will be contacted on this valid phone number ", " for confirmation. This Date of Birth ", " is recorded for future use and it is being held confidentially as well as these information provided ", " Thank you "];
    
    
    var object = new MemberObject(member, stringMessage);
    
    var jsonObject = JSON.stringify(object);
    
    saveObject(jsonObject);
              lStorage();
}


    
    function MemberObject (member, stringMessage) {
        this.member = member;
        this.stringMessage = stringMessage;
    }


/* Local storage API
*/

function saveObject(jsonObject){
    if (typeof(Storage) !== "undefined") {
        localStorage.memberObject = jsonObject;
    } else {
        window.alert("device does not support this file")
    }
}


function lStorage() {
    if(localStorage.memberObject){
        var object = JSON.parse(localStorage.memberObject);
    
    var member = object.member;
    var theCheck = object.stringMessage;
    
    
    //changes
    
    var element = document.getElementById("theData");
    
    // Adds
    var title = document.createElement("h2");
    var next = document.createTextNode("Dear Participant: ");
    title.appendChild(next);
    element.appendChild(title);
    
    //adding of the checks
    var paragraph = document.createElement("p");
        paragraph.setAttribute("class", "theCheck");
        var text = theCheck[0] + member.name + theCheck[1] + member.email + theCheck[2] + member.phone + theCheck[3] + member.dateOb + theCheck[4] + member.message + theCheck[5];
        
        next = document.createTextNode(text);
        paragraph.appendChild(next);
        element.appendChild(paragraph);
        
        var button = document.createElement("button");
        button.setAttribute('type', 'button');
        button.setAttribute('onclick', 'backHome()');
        button.setAttribute('class', 'home');
        next = document.createTextNode("Home");
        button.appendChild(next);
        
        element.appendChild(button);
        
        var gain = document.createElement("p");
        next = document.createTextNode("**Data successfully Stored**");
        gain.appendChild(next);
        
        element.appendChild(document.createElement('br'));
        element.appendChild(document.createElement('br'));
        element.appendChild(gain);
        
        // Make the form disappear so that they cannot add another form
        document.querySelector("fieldset").style.display = "none";
        
    } else {
        console.log("Nothing to load!");
    }
}
//home
function backHome() {
    localStorage.removeItem("memberObject");
    location.reload();
}


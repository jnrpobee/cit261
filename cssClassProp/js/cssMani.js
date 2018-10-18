function myDesi() {
    var x = document.getElementById('design');
    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}


 function visible() {
     
     
     document.body.style.backgroundColor = "#fff";
     document.body.style.margin = "auto";
     document.body.style.fontSize = "16px";
     document.body.style.font = "red";
     document.body.style.fontFamily = "sans-serif";
     document.body.style.lineHeight ="1.5";
     document.body.style.boxShadow = "0 0 2px rgba(0, 0, 0, 0.06)";
     document.body.style.maxWidth = "1100px";
     document.body.style.padding = "2em 2em 2em";
     
    var start =  document.querySelector("main");
     start.style.visibility='visible';
     start.style.backgroundColor = "#f0ffff";
     start.style.marginTop = "-20px";
          start.style.font = "red";

     start.style.textAlign = "center";
     start.style.padding = ".6rem 2%";
     
     var ban = document.getElementById("banner");
     ban.style.display = "block";
     ban.style.width = "100%";
     ban.style.height = "300px";
     ban.style.margin = "-1px";
     ban.style.maxWidth = "100%";
     ban.stle.border = "0.5px solid black";
     ban.style.marginBottom = "1px";
     
     var head = document.querySelectorAll("h1, h2");
     head.style.textAlign = "center";

     /* ------
     --------
     --------
     it is not taking any effect
     -----
     -----
     -----*/
     
var eader = document.querySelector("header");
     eader.style.backgroundColor = "#609d9f";
     eader.style.textAlign = "center";
     eader.style.color = "#ffffff";
     eader.style.marginTop = "-20px";


var theTable = document.querySelector("table");
theTable.style.width = "70%";
     theTable.style.textAlign = "center";
     theTable.style.boxShadow = "5px 8px 7px #ffd700";

var foot = document.querySelector("footer");
foot.style.backgroundColor = "#ddd";
foot.style.padding = ".6rem 2%";
foot.style.textAlign = "center";
}




function invisible() {
                document.getElementById("property").style.visibility='hidden';
            }
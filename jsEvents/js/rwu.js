
//Weather API
var requestURL = '//api.wunderground.com/api/603ff4987cc67f03/conditions/forecast/q/ID/Rexburg.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function () {
    var rexburgWeather = JSON.parse(request.responseText);
    console.log(rexburgWeather);
    
    request.onload = function () {
    var rexburgWeather = JSON.parse(request.responseText);
    console.log(rexburgWeather);
   
     document.getElementById('desc').innerHTML = rexburgWeather.current_observation.display_location.full;
    
   
 //for a period of 7days   
    
    document.getElementById('daY1').innerHTML = rexburgWeather.forecast.txt_forecast.forecastday['1'].fcttext;
    document.getElementById('iconD1').src = rexburgWeather.forecast.txt_forecast.forecastday['1'].icon_url;
    
    document.getElementById('daY2').innerHTML = rexburgWeather.forecast.txt_forecast.forecastday['2'].fcttext;
    document.getElementById('iconD2').src = rexburgWeather.forecast.txt_forecast.forecastday['2'].icon_url;
    
    document.getElementById('daY3').innerHTML = rexburgWeather.forecast.txt_forecast.forecastday['3'].fcttext;
    document.getElementById('iconD3').src = rexburgWeather.forecast.txt_forecast.forecastday['3'].icon_url;
    
    document.getElementById('daY4').innerHTML = franklinWeather.forecast.txt_forecast.forecastday['4'].fcttext;
    document.getElementById('iconD4').src = rexburgWeather.forecast.txt_forecast.forecastday['4'].icon_url;
    
    document.getElementById('daY5').innerHTML = rexburgWeather.forecast.txt_forecast.forecastday['5'].fcttext;
    document.getElementById('iconD5').src = rexburgWeather.forecast.txt_forecast.forecastday['5'].icon_url;
    
    document.getElementById('daY6').innerHTML = rexburgWeather.forecast.txt_forecast.forecastday['6'].fcttext;
    document.getElementById('iconD6').src = rexburgWeather.forecast.txt_forecast.forecastday['6'].icon_url;
    
    document.getElementById('daY7').innerHTML = rexburgWeather.forecast.txt_forecast.forecastday['7'].fcttext;
    document.getElementById('iconD7').src = rexburgWeather.forecast.txt_forecast.forecastday['7'].icon_url;
    
    };
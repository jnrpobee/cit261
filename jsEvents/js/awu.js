var requestURL = '//api.wunderground.com/api/603ff4987cc67f03/conditions/forecast/q/Ghana/Accra.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function () {
    var accraWeather = JSON.parse(request.responseText);
    console.log(accraWeather);
   
     document.getElementById('desc').innerHTML = accraWeather.current_observation.display_location.full;
    
    document.getElementById('windSd').innerHTML = accraWeather.current_observation.wind_mph;
    
     document.getElementById('windDir').innerHTML = accraWeather.current_observation.wind_dir;
    
     document.getElementById('tempF').innerHTML = accraWeather.current_observation.temp_c;
    
    
    var icon_path = accraWeather.current_observation.icon_url;
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);
    
    if (found >= 0) {
        icon_path = icon_path.replace("http", "https");
    }
    
    document.getElementById('iconImg').src = icon_path;
        
    document.getElementById('iconWd').innerHTML = accraWeather.current_observation.icon;
    
    document.getElementById('currentPeriod').innerHTML = accraWeather.forecast.txt_forecast.forecastday['0'].fcttext_metric;
    
    document.getElementById('relativE').innerHTML = accraWeather.current_observation.relative_humidity;
    
    
     //for a period of 7days   
    
    document.getElementById('daY1').innerHTML = accraWeather.forecast.txt_forecast.forecastday['1'].fcttext_metric;
    document.getElementById('iconD1').src = accraWeather.forecast.txt_forecast.forecastday['1'].icon_url;
    
    document.getElementById('daY2').innerHTML = accraWeather.forecast.txt_forecast.forecastday['2'].fcttext_metric;
    document.getElementById('iconD2').src = accraWeather.forecast.txt_forecast.forecastday['2'].icon_url;
    
    document.getElementById('daY3').innerHTML = accraWeather.forecast.txt_forecast.forecastday['3'].fcttext_metric;
    document.getElementById('iconD3').src = accraWeather.forecast.txt_forecast.forecastday['3'].icon_url;
    
    document.getElementById('daY4').innerHTML = accraWeather.forecast.txt_forecast.forecastday['4'].fcttext_metric;
    document.getElementById('iconD4').src = accraWeather.forecast.txt_forecast.forecastday['4'].icon_url;
    
    document.getElementById('daY5').innerHTML = accraWeather.forecast.txt_forecast.forecastday['5'].fcttext_metric;
    document.getElementById('iconD5').src = accraWeather.forecast.txt_forecast.forecastday['5'].icon_url;
    
    document.getElementById('daY6').innerHTML = accraWeather.forecast.txt_forecast.forecastday['6'].fcttext_metric;
    document.getElementById('iconD6').src = accraWeather.forecast.txt_forecast.forecastday['6'].icon_url;
    
    document.getElementById('daY7').innerHTML = accraWeather.forecast.txt_forecast.forecastday['7'].fcttext_metric;
    document.getElementById('iconD7').src = accraWeather.forecast.txt_forecast.forecastday['7'].icon_url;
    
  
    
};
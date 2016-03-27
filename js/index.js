// http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=d7bb942f791cd8599aab2a01456238db

//https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBRNtNQK-f2KzReRqfa6tcFoVtla8G8gFw
var temp = 0
var settingslocation = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBRNtNQK-f2KzReRqfa6tcFoVtla8G8gFw",
  "method": "POST"
}
var settingsweather = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.openweathermap.org/data/2.5/weather?appid=d7bb942f791cd8599aab2a01456238db",
  "method": "GET"
}

$.ajax(settingslocation).done(function(responseloc) {
  var lat = responseloc.location.lat;
  var lng = responseloc.location.lng;
  settingsweather.url = settingsweather.url + "&lat=" + lat + "&lon=" + lng;
  $.ajax(settingsweather).done(function(responseweat) {
    temp = responseweat.main.temp
    document.getElementById("loc").innerHTML = responseweat.name + ", " + responseweat.sys.country;
    console.log(responseweat)
  document.getElementById("degrees").innerHTML = Math.round(temp - 273.15) + "°";
  $('#icon').html('<img src="http://openweathermap.org/img/w/' + responseweat.weather[0].icon + '.png">'); 
  });
});



$("#celsius").click(function() {
  document.getElementById("degrees").innerHTML = Math.round(temp - 273.15) + "°";
})
$("#faren").click(function() {
  document.getElementById("degrees").innerHTML = Math.round(temp * 9 / 5 - 459.67) + "°"
})

var d = new Date();
d.toDateString();
console.log(d);
document.getElementById("date").innerHTML = d.toDateString()
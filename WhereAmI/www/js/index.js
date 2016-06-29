window.onload = function()
{
    addEventListener('deviceready', init, false);
    init();
}

function init()
{
    
}

function getLocation()
{
    var options = 
        {
            maximumAge: 3000,
            timeout: 5000,
            enableHighAccuracy: true
        }; 
    
    navigator.geolocation.getCurrentPosition(success, failure, options);
}

function success(position)
{
    var accuracy = position.coords.accuracy;
    var altitude = position.coords.altitude;
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    var timestamp = position.timestamp;
    
    var output = 'Accuracy: ' + accuracy + '<br/>';
    output += 'Altitude: ' + altitude + '<br/>';
    output += 'Latitude: ' + latitude + '<br/>';
    output += 'Longitude: ' + longitude + '<br/>';
    output += 'Timestamp: ' + timestamp + '<br/>';
    
    document.getElementById('result').innerHTML = output;
    
    var mapOptions =
        {
            center: {lat: latitude, lng: longitude},
            zoom: 18
        };
    
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var marker = new google.maps.Marker(
    {
        position: {lat: latitude, lng: longitude},
        map: map
    });
}

function failure(msg)
{
    alert('Failure: ' + msg.message);
}

function clearScreen()
{
    document.getElementById('map-canvas').innerHTML = '';
    document.getElementById('map-canvas').style.backgroundColor = 'white';
    document.getElementById('result').innerHTML = '';
}
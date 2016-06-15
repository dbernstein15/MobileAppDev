window.onload = function()
{
    document.addEventListener("deviceready", init, false);
    
    //call init() inly if testing in browser and you can't get status device ready
    init();
};

function init()
{
    //Examples of adding events to buttons after the device is ready
    document.getElementById('btnJoke').addEventListener('click', getJoke, false);
    
    document.getElementById('btnQuery').addEventListener('click', getNewJoke, false);
    
    document.getElementById('btnZip').addEventListener('click', getWeather, false);
    
    document.getElementById('btnTrains').addEventListener('click', getTrains, false);
    
    //document.getElementById('zip').addEventListener('change', getWeather, false);
}
//----------------------------Joke------------------------------------------------------
function getJoke()
{
    $.ajax({
        type: "GET",
        url: "http://api.icndb.com/jokes/random/",
        dataType: "text",
        success: function(result) {showJoke(result);}
    })
}

function showJoke(result)
{
    var json = jQuery.parseJSON(result);
    document.getElementById('resultJoke').innerHTML = json.value.joke;
}
//--------------------------Chuck Norris Query--------------------------------------------
function getNewJoke()
{
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    $.ajax({
        type: 'GET',
        url: 'http://api.icndb.com/jokes/random/?firstName=' + fName + '&lastName=' + lName,
        dataType: 'text',
        success: function(result) {showJokeQuery(result);}
    })
}

function showJokeQuery(result)
{
    var json = jQuery.parseJSON(result);
    document.getElementById('resultQuery').innerHTML = json.value.joke;
}
//-----------------------------Weather----------------------------------------------------
function getWeather()
{
    var zip = document.getElementById('zip').value;
    
    $.ajax({
        type: 'GET',
        url: 'http://wsf.cdyne.com/WeatherWS/Weather.asmx/GetCityWeatherByZIP?ZIP=' + zip,
        dataType: 'xml',
        success: function (xml) {showWeather(xml);}
    })
}

function showWeather(xml)
{
    var city = xml.getElementsByTagName('City')[0].firstChild.nodeValue;
    var temperature = xml.getElementsByTagName('Temperature')[0].firstChild.nodeValue;
    var description = xml.getElementsByTagName('Description')[0].firstChild.nodeValue;
    
    var output = "";
    output += city + "<br/>";
    output += 'Temperature: ' + temperature + "<br/>";
    output += 'Description: ' + description + '<br/>';
    document.getElementById('resultWeather').innerHTML = output;
}
//---------------------------Train Station Query-------------------------------------------
function getTrains()
{
    $.ajax({
        type: 'GET',
        url: "http://www3.septa.org/hackathon/Arrivals/90404/10",
        dataType: 'text',
        success: function (result) {showTrainsQuery(result);}
    });
}

function showTrainsQuery(result)
{
    var data = jQuery.parseJSON(result);
    
    var arr = data[Object.keys(data)];
    var northbound = arr[0].Northbound;
    var southbound = arr[1].Southbound;
    
    var output = "<span class = 'table border'>"
    output = "<h2>Northbound</h2>";
    for (i=0; i<northbound.length; i++)
        output += '<span class = "row border"> <span class = "cell border blue">' + northbound[i].train_id + "</span> <span class = 'cell border red'>" + northbound[i].destination + "</span> <span class = 'cell border blue'>" + northbound[i].depart_time + "</span></span>";
    
    output += "<h2>Southbound</h2>";
    for (i=0; i<southbound.length; i++)
        output += '<span class = "row border"> <span class = "cell border blue">' + southbound[i].train_id + "</span> <span class = 'cell border red'>" + southbound[i].destination + "</span> <span class = 'cell border blue'>" + southbound[i].depart_time + "</span></span>";
    
    document.getElementById('resultTrains').innerHTML = output;
}
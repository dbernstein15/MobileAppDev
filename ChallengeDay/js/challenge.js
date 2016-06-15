
    var myData =
	{
		items: 
		[
			{ name: "Names", place: "Places", thing: "Things"},
			{ name: "James", place: "Paris", thing: "Books"},
			{ name: "Laura", place: "Mexico", thing: "Chairs"},
			{ name: "Sam", place: "Italy", thing: "Paper"}
		]
	};

function generateTable()
{
    var output ="";
    output = "<ul class='table'>";
    for (var i=0; i< myData.items.length; i++)
        {
            output += "<li> <span class='cellNames'>" + myData.items[i].name+"</span>";
            output += "<span class='cellPlaces'>" +myData.items[i].place + "</span>";
            output += "<span class='cellThings'>" + myData.items[i].thing+"</span> </li>";
        }
    output += "</ul>";
    document.getElementById("table").innerHTML = output;
}

function generateList()
{ 
    var output = "";
    output = "<ul class = 'list'>";
    for (var i=1; i<myData.items.length; i++)
        {
           output += '<span class = "x"> <li>' + myData.items[0].name + ': ' + myData.items[i].name + '</li>';
           output += '<li>' + myData.items[0].place + ': ' + myData.items[i].place + '</li>';
           output += '<li>' + myData.items[0].thing + ': ' + myData.items[i].thing + '</li> </span>';
        }
    output += "</ul>";
    document.getElementById("list").innerHTML = output;
}

function generateNextList()
{   
    var output = "";
    output = "<ul class = 'nameList'>";
    for (var i=1; i<myData.items.length; i++)
        {
            output += '<li> <button id = "btn' + myData.items[i].name + ' onclick = "display(' + i + ');>' + myData.items[i].name + '</button> </li>';
            
        }
    output += '</ul>';
    document.getElementById('name').innerHTML = output;
}

function display(index)
{   
    output = "";
    output += myData.items[index].name + " - " + myData.items[index].place + " - " +    
            myData.items[index].thing;
    document.getElementById('name1').innerHTML = output;
}

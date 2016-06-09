window.onload = function()
{
    document.getElementById('btnShow').addEventListener('click', showMe, false);
    
    document.getElementById('btnAdd').addEventListener('click', addNumbers, false);
    
    var btn = document.createElement('button');
    var text = document.createTextNode('CLICK ME');
    btn.appendChild(text);
    document.body.appendChild(btn);
    
    var myDiv = document.getElementById('content');
    //myDiv.innerHTML = 'Georgia College';
    var theElements = myDiv.getElementsByClassName('large');
    theElements[0].innerHTML = 'Georgia College';
};

function showMe()
{
    alert('Show Me');
}

function addNumbers()
{
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var result = document.getElementById('result');
    
    result.value = parseInt(num1.value) + parseInt(num2.value);
}

function testJS()
{
    //alert('Testing JS');
    
    var image = document.getElementById('myImage');
    if (image.src.match('go'))
        image.src = "img/stop_sign.jpg";
    else 
        image.src = "img/go_sign.jpg";
    
    var demo = document.getElementById('demo');
    demo.innerHTML = "<h1>HELLO</h1> <ul><li> one </li></ul>";
    
    var text = "ABCD";
    var strLength = text.length;
    //alert(strLength);
    
    var pos = text.search("B");
    //alert("Position of B: " + pos);
    
    var values = ["Volvo", "Saab", "Fiat"];
    //alert(values[0]);
    console.log("Array testing" + values[0]);
    
    var result = "";
    var foods = ['Apples', 'Bananas', 'Oranges'];
    for(var i in foods)
    {
        if (foods[i] == 'Apples')
            result += foods[i] + ' are good ';
        else
            result += foods[i] + ' are ok ';
    }
    //alert(result);
    
    var count = 0;
    for (var i=0; i<foods.length; i++)
    {
        if (foods[i] != 'Apples')
            count++;
    }
    console.log("Count of non Apples: " + count);
    
    /*var person = 
        {
            firstName: "John", 
            lastName: "Doe",
            age: 50,
            eyeColor: "blue"
        };
    console.log("Full Name: " + person.firstName + " " + person.lastName);*/
    
    var myFather = new person("James", "Smith", 70, "brown");
    var myMother = new person("Charlia", "Williams", 78, "hazel");
    
    display(myFather);
    display(myMother);
    
    var result = "";
    for (var field in myMother)
    {
        result += "myMother." + field + " = " + myMother[field] + "<br/>";
    }
    console.log(result);
    
    var text = '{"employees" :[' +
        '{"firstName":"John", "lastName":"Doe"},' +
        '{"firstName":"Anna", "lastName":"Smith"},' +
        '{"firstName":"Peter", "lastName":"Jones"} ]}';
    var obj = JSON.parse(text);
    console.log("First employee: " + obj.employees[0].firstName + " " +
        obj.employees[0].lastName);
    
    /*for (i=0; i<obj.employees.length; i++)
        display(obj.employees[i]);*/
    
    //same as above
    for (var i in obj.employees)
        display(obj.employees[i]);
    
    var myInputs = document.getElementsByTagName('input');
    console.log("Number of input elements: " + myInputs.length);
    myInputs[0].style.backgroundColor = 'red';
}

function person(first, last, age, eye)
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

function display(obj)
{
    console.log("Name: " + obj.firstName + " " + obj.lastName);
}
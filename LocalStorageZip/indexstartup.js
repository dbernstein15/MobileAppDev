window.onload = function () {
	showOptions();	
}


function opStore() {
	showPage("pgStore");
}

function opGet() {
	showPage("pgGet");
}

function opShowAll() {
	showPage("pgShowAll");
	var str = "";

	//Get All Keys
	
	//For each Key add key/value to String

	//Update Display
	document.getElementById("result").innerHTML = str;
}

function showOptions() {
	showPage("pgOptions");
}

function showPage(pgShow) {
	//Makes pgGet visible -- and pgStore invisible
	var pages = document.getElementsByClassName("page");
	for (i = 0; i < pages.length; i++) {
		pg = pages[i];
		pg.classList.remove("show");
		pg.classList.add("hide");
	}
	document.getElementById(pgShow).classList.add("show");
	document.getElementById(pgShow).classList.remove("hide");
	
	//Clear all existing data
	document.getElementById("result").innerHTML = "";
	clearForm();
}

function item(upc, product, quantity) {
	this.upc = upc;
	this.product = product;
	this.quantity = quantity;
}

function btnStoreIt() {
	
}

function btnGetIt() {
	
}

function btnRemoveIt() {
	
}

//updates "keys" field
function addKey(keystr) {
	//Get current array of current keys stored
	
	//add keystr to the array if it is not already in the array
	
}

function removeKey(keystr) {
	
	//Get  array of keys stored
	//remove the keystr from the array
}

function clearForm()
{
	var upc = document.getElementById("upc");
	var product = document.getElementById("product");
	var quantity = document.getElementById("quantity");
	var key = document.querySelector("#upcGet");
	
	upc.value="";
	product.value="";
	quantity.value="";
	key.value = "";
}
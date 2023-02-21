var button = document.getElementById("enter");
var removeButton = document.getElementById("remove");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var liArray = document.querySelectorAll("li");
var removeList = document.getElementsByClassName("done");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossOffList() {
	li[0].classList.toggle("done");
	console.log("cross-off");
}

function removeFromList() {
	removeList[0].remove();
	return li;
}

button.addEventListener("click", addListAfterClick);
removeButton.addEventListener("click", removeFromList);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", crossOffList);
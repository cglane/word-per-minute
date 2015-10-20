


var element = document.getElementById("mins");
var minsInput = document.getElementById("inputbox");
var wordsInput = 230;

//used in 'onsubmit'
function save(){
var form = document.getElementById("myForm");
var value = form["name"].value;
console.log(value);
wordsInput = value;
localStorage["inputMin"] = value;
}
//setting input to wordsInput
function pullLocalStorage(){
  wordsInput = localStorage["inputMin"];
}
pullLocalStorage();
console.log(wordsInput);
var number = speed(wordsInput);
element.innerHTML = number;

//set elements in-line


// range
var range = document.getElementById("range");
var odds = document.getElementById("odds");
odds.innerHTML = range.value;

range.oninput = function() {
    odds.innerHTML = this.value;
}

// buttons
var select = document.getElementById("select");
var options = select.getElementsByTagName("option");
function first() {
    select.selectedIndex = 0;
}

function next() {
    if (select.selectedIndex == options.length-1)
        first();
    else
        select.selectedIndex = select.selectedIndex+1;
}

function prev() {
    if (select.selectedIndex == 0)
        last();
    else
        select.selectedIndex = select.selectedIndex-1;
}

function last() {
    select.selectedIndex = options.length-1;
}

function reqListener () {
    console.log(this.responseText);    
}
  
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
console.log(oReq);
oReq.open("GET", "asd.txt");
oReq.send();

$(document).ready(function() {    
    $("#load").load("asd.txt");
});

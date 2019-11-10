// range
var range = document.getElementById("range");
var odds = document.getElementById("odds");
odds.innerHTML = range.value;

range.oninput = function() {
    odds.innerHTML = this.value;
}

// Beolvasás helyett a data.txt-ben az entereket kicseréltem /*/ ezekre a karakterekre
// Elejére írtam, h var data ="
// végére ";
// Kiterjesztés megváltoztattam js-re és importáltam és így dolgozunk az adatokkal

var dataLine = data.split('/*/');
var item = [];

var select = document.getElementById('select');
var text = document.getElementById('text');
var originalLabels = document.getElementById('originalLabels');
var recommandedLabels = document.getElementById('recommandedLabels');
var alsoOriginalLabels = document.getElementById('alsoOriginalLabels');
var min3 = document.getElementById('min3');
var p = document.getElementById('p');
var r = document.getElementById('r');
var countR = 0;
var countP = 0;

for (let i = 0; i < dataLine.length; i++) {
    var parts = dataLine[i].split('$$$');

    item[i] = {
        'recommandedLabels': parts[0],
        'alsoRecommandedLabels': parts[1],
        'originalLabels': parts[2],
        'title': parts[3],
        'text': parts[4]
    };

    var option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = item[i]['title'];
    select.appendChild(option);
}
select.onchange();

function selectOnchange(n) {
    text.innerHTML = item[n]['text'];
    var list = item[n]['originalLabels'].split(' ');
    countR = 0;
    list.forEach(element => {
        if (element.includes("__label__")) {
            originalLabels.innerHTML += element.replace(/@@/g, ' ').replace('__label__', ' ') + '<br>';
            countR++;
        } else if (element.includes("geography__") || element.includes("organization__") || element.includes("person__")) {
            alsoOriginalLabels.innerHTML += element.replace(/@@/g, ' ') + '<br>';
        }
    });

    rangeOnchange();
}

function rangeOnchange() {

    if (min3.checked)
        var sum = 0;
    else var sum = 4;

    var list = item[select.value]['recommandedLabels'].split('__label__');
    recommandedLabels.innerHTML = '';

    list.forEach(element => {
        if (range.value < element.replace( /^\D+/g, '') || sum <= 3){
            recommandedLabels.innerHTML += element.replace(/@@/g, ' ') + '<br>';
            sum++;     
        }
    });
    
    if (min3.checked)
        var sum = 0;
    else var sum = 4;

    var list2 = item[select.value]['alsoRecommandedLabels'].split('__label__');
    alsoRecommandedLabels.innerHTML = '';

    list2.forEach(element => {
        if (range.value < element.replace( /^\D+/g, '') || sum <= 3){
            alsoRecommandedLabels.innerHTML += element.replace(/@@/g, ' ') + '<br>';
            sum++; 
        }
    });

    //p.innerHTML = 'P: ' + 'mi az a helyes találatok?' / list.lenght;
    //r.innerHTML = 'R: ' + 'mi az a helyes találatok?' / countR;
}

// buttons
var options = select.getElementsByTagName("option");
function first() {
    if (select.selectedIndex < 20)
        select.selectedIndex = 0;
    else
        select.selectedIndex = select.selectedIndex-20;
    select.onchange();
}

function next() {
    if (select.selectedIndex == options.length-1)
        select.selectedIndex = 0;
    else
        select.selectedIndex = select.selectedIndex+1;
    select.onchange();
}

function prev() {
    if (select.selectedIndex == 0)
        select.selectedIndex = options.length-1;
    else
        select.selectedIndex = select.selectedIndex-1;
    select.onchange();
}

function last() {
    if (select.selectedIndex > options.length-20)
        select.selectedIndex = options.length-1;
    else
        select.selectedIndex = select.selectedIndex+20;
    select.onchange();
}

/*
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
*/
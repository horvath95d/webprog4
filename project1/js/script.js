
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

var readFile =  function(filePath) {
    var fs = require('fs');
    var readline = require('readline'); 
    var fileReader = readline.createInterface({
        input: fs.createReadStream(filePath),
        output: process.stdout,
        console: false
    });
    fileReader.on('line', function (line) {
        var dataLine = line.split("$$$");
 
        var article = {
            'title': dataLine[3],
            'originalLabels': dataLine[2],
            'recommendedLabels': dataLine[0],
            'alsoRecommendedLabels': dataLine[1],
            'text': dataLine[4]
        };
        list.push(article);
        console.log(list.length);
    });
    console.log(list.length); 
}
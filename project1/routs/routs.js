var express = require('express');
var router = express.Router();

var fs = require('fs');
var readline = require('readline');

var list = [];

var fileReader = readline.createInterface({
    input: fs.createReadStream('data.txt'),
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
});

router.get('/',
    function (req, res) {
        fs.readFile('index.ejs', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.get('list', list); // nem tudom, h ez jó-e / hogyan kell elküldeni a listát a html oldalnak?
            res.end();
        });
    }
);

module.exports = router;
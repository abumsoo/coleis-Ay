var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var notSoRawData = "";

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('This is the root page.');
})

app.get('/index.html', function (req, res) {
		res.sendFile( __dirname + "/" + "index.html");
})

app.get('/process_get', function (req, res){
    res.send('Retrieving Twitter data from: ' + req.query.act_req);
    client.get('statuses/user_timeline', {screen_name: req.query.act_req, count: req.query.count_req}, function(error, tweets, response){
    if(error) throw error;
        for(i = 0; i<req.query.count_req; i++){
            notSoRawData+=tweets[i].text + " "
        }
});
});

function getIndexOf(strArray, str1){
    for(i=0;i<strArray.length;i++){
        if(strArray[i]===str1){
            return (i);
        }
    }
    return (-1);
}

var fs = require('fs')
var giantWord;

var giantWord = fs.readFileSync('out0').toString();
var domesticSecurity=giantWord.split(" +");
var giantWord = fs.readFileSync('out1').toString();
var hazmatNuclear=giantWord.split(" +");
var giantWord =fs.readFileSync('out2').toString();
var healthConcern=giantWord.split(" +");
var giantWord = fs.readFileSync('out3').toString();
var infrastructure=giantWord.split(" +");
var giantWord = fs.readFileSync('out4').toString();
var southwestBorderViolence=giantWord.split(" +");
var giantWord = fs.readFileSync('out5').toString();
var terrorism=giantWord.split(" +");
var giantWord = fs.readFileSync('out6').toString();
var weatherDisasterEmergency=giantWord.split(" +");
var giantWord = fs.readFileSync('out7').toString();
var cyberSecurity=giantWord.split(" +")


//console.log(domesticSecurity);
//console.log(hazmatNuclear);
//console.log(healthConcern);
//console.log(infrastructure);
//console.log(southwestBorderViolence);
//console.log(terrorism);
//console.log(weatherDisasterEmergency);
//console.log(cyberSecurity);

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

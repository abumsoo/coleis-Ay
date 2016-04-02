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

var domesticSecurity = [];
var hazmatNuclear = [];
var healthConcern = [];
var infrastructure = [];
var southwestBorderViolence = [];
var terrorism = [];
var weatherDisasterEmergency = [];
var cyberSecurity = [];

var fs = require('fs')
var content = fs.readFileSync('words').toString();

var gigantoreword = content.split(";")
var giganlen = gigantoreword.length;

domesticSecurity = gigantoreword.slice(0,gigantoreword.indexOf("hazmat"));
hazmatNuclear = gigantoreword.slice(gigantoreword.indexOf("hazmat"),gigantoreword.indexOf("outbreak"));
healthConcern = gigantoreword.slice(gigantoreword.indexOf("outbreak"),gigantoreword.indexOf("infrastructure security"));
infrastructure = gigantoreword.slice(gigantoreword.indexOf("infrastructure security"),gigantoreword.indexOf("drug cartel"));
southwestBorderViolence = gigantoreword.slice(gigantoreword.indexOf("drug cartel"),gigantoreword.indexOf("terrorism"));
terrorism = gigantoreword.slice(gigantoreword.indexOf("terrorism"),gigantoreword.indexOf("emergency"));
weatherDisasterEmergency = gigantoreword.slice(gigantoreword.indexOf("emergency"),gigantoreword.indexOf("cyber security"));
cyberSecurity = gigantoreword.slice(gigantoreword.indexOf("cyber security"),(giganlen+1));

//console.log(domesticSecurity);
//console.log(hazmatNuclear);
//console.log(healthConcern);
//console.log(infrastructure);
//console.log(southwestBorderViolence);
console.log(terrorism);
//console.log(weatherDisasterEmergency);
//console.log(cyberSecurity);

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

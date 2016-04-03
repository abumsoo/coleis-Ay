var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var notSoRawData = "";
var username = "";

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.redirect('/index.html');
})

app.get('/index.html', function (req, res) {
		res.sendFile( __dirname + "/" + "index.html");
})
var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

app.get('/process_get', function (req, res){
    res.send('Retrieving Twitter data from: ' + req.query.act_req);
    client.get('statuses/user_timeline', {screen_name: req.query.act_req, count: req.query.count_req}, function(error, tweets, response){
        username = req.query.act_req;
    if(error) throw error;
        for(i = 0; i<req.query.count_req; i++){
            notSoRawData+=tweets[i].text + " "
        }
        notSoRawData = notSoRawData.toLowerCase();
        notSoRawData = notSoRawData.replace(/(\r\n|\n|\r)/gm,"");
        notSoRawData = notSoRawData.replace(/\s+/g, " ");
        notSoRawData = notSoRawData.replace(regex, "")
        console.log(notSoRawData)
});
});
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

var lessRawData = [0, 0, 0, 0, 0, 0, 0, 0];
notSoRawData = notSoRawData.split();
for(i=0;i<notSoRawData.length;i++){
	for(j=0;j<domesticSecurity.length;j++){
		if(notSoRawData[i]==domesticSecurity[j]){
			lessRawData[0]+=1;
		}
	}
	for(j=0;j<hazmatNuclear.length;j++){
	    if(notSoRawData[i]==hazmatNuclear[j]){
	 		lessRawData[1]+=1;
	 	}
	}
	for(j=0;j<healthConcern.length;j++){
	 	if(notSoRawData[i]==healthConcern[j]){
	 		lessRawData[2]+=1;
	 	}
	}
	for(j=0;j<infrastructure.length;j++){
	 	if(notSoRawData[i]==infrastructure[j]){
	 		lessRawData[3]+=1;
	 	}
	}
	for(j=0;j<southwestBorderViolence.length;j++){
	 	if(notSoRawData[i]==southwestBorderViolence[j]){
	 		lessRawData[4]+=1;
	 	}
	}
	for(j=0;j<terrorism.length;j++){
	 	if(notSoRawData[i]==terrorism[j]){
	 		lessRawData[5]+=1;
		}
	}
	for(j=0;j<weatherDisasterEmergency.length;j++){
		if(notSoRawData[i]==weatherDisasterEmergency[j]){
			lessRawData[6]+=1;
		}
	}
	for(j=0;j<cyberSecurity.length;j++){
		if(notSoRawData[i]==cyberSecurity[j]){
			lessRawData[7]+=1;
		}
	}
}

document.getElementById("username").innerHTML=username;

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

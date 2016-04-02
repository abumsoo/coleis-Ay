var express = require('express');
var bodyParser = require('body-parser');
var app = express();

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

app.get('/twittertest', function (req, res) {
   client.get('statuses/user_timeline', {screen_name: 'bumshakabum'}, function(error, tweets, response){
   if(error) throw error;
	    console.log(tweets);
});
})

app.get('/index.html', function (req, res) {
    console.log(res.query)
		res.sendFile( __dirname + "/"+ "index.html");
})

app.get('/process_get', function (req, res){
    console.log('heya')
    console.log(req);
    //res.redirect('./public/images/' + req.query)
    res.redirect('/images/' + req.query.img_req + '.jpg');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

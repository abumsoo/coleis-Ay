var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('This is the root page.');
})

app.get('/index.html', function (req, res) {
    console.log(res.query)
		res.sendFile( __dirname + "/"+ "index.html")
})

app.get('process_get', function (req, res){
    console.log('heya')
    console.log(req)
    //res.redirect('./public/images/' + req.query)
    res.redirect('./public/images/jarjar.jpg')
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

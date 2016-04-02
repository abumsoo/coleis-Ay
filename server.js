var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('This is the root page.');
})

app.get('/index.html', function (req, res) {
		
		res.redirect('../public/images/' + req.query.img_req)}
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
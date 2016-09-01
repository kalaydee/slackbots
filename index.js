var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({encode: true}));

app.get('/', function(request, response) {
	response.status(200).send('Hello World!');
});

app.listen(port, function() {
	console.log('Listening on port ' + port);
});

app.post('/hello', function(request, response, next) {
	var userName = require.body.user_name;
	var botPayload = {
		text: 'Hello ' + userName + ', welcome to the Mesasix Slack Channel! :)'
	};

	if(userName !== 'slackbot'){
		return response.status(200).json(botPayload);
	}else{
		return response.status(200).end();
	}
});
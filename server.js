var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var api = require('./app/routing/api-routes.js');
var html = require('./app/routing/html-routes.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.set('port',PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

api.displayFriends(app);
api.newFriend(app);
html.homePage(app);
html.surveyPage(app);

app.listen(app.get('port'), function() {
	console.log("App listening on PORT: " + app.get('port'));
});
var path = require('path');

function homePage(app){
	app.get('/', function(req,res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
}

function surveyPage(app){
	app.get('/survey',function(req,res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
}

module.exports.homePage = homePage;
module.exports.surveyPage = surveyPage;
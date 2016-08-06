var friends = require('../data/friends');

function displayFriends(app){
	app.get('api/friends',function(req,res){
		res.send(friends);
	});
}

function newFriend(app){
	app.post('/api/friends',function(req,res){
		var friend = req.body;
		var closes = 50;
		console.log(friends);
		console.log(friend);
		friends.map(function(item, index) {
			var difference = 0;
			item.scores.forEach(function(score, index) {
				difference += Math.abs(parseInt(score) - parseInt(friend.scores[index]));
			})
			if(closes > difference) {
				closes = difference 
				match = index;
			}
			console.log(difference, ' - ', match);
		});
		friends.push(friend);
		res.send(friends[match]);
	});
}

module.exports.displayFriends = displayFriends;
module.exports.newFriend = newFriend;

const mongoose = require('mongoose'),
	NewsPost = require('./models/newspost'),
	Player = require('./models/player'),
	Sponsor = require('./models/sponsor'),
	Squad = require('./models/squad'),
	Staffer = require('./models/staffer'),
	newsposts = require('./seeds/newsposts'),
	players = require('./seeds/players'),
	sponsors = require('./seeds/sponsors'),
	squads = require('./seeds/squads'),
	staffers = require('./seeds/staffers');

function seedDB() {
	// SEED NEWSPOSTS
	NewsPost.deleteMany({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('removed NewsPosts!');

		for (i = 0; i < newsposts.length; i++) {
			NewsPost.create(newsposts[i], function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('added a NewsPost!');
				}
			});
		}
	});

	// SEED PLAYERS
	Player.deleteMany({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('removed Players!');

		for (i = 0; i < players.length; i++) {
			Player.create(players[i], function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('added a Player!');
				}
			});
		}
	});

	// SEED SPONSORS
	Sponsor.deleteMany({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('removed Sponsors!');

		for (i = 0; i < sponsors.length; i++) {
			Sponsor.create(sponsors[i], function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('added a Sponsor!');
				}
			});
		}
	});

	// SEED SQUADS
	Squad.deleteMany({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('removed squads!');

		for (i = 0; i < squads.length; i++) {
			Squad.create(squads[i], function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('added a Squad!');
				}
			});
		}
	});

	// SEED WEBAPPS
	Staffer.deleteMany({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('removed Staffers!');

		for (i = 0; i < staffers.length; i++) {
			Staffer.create(staffers[i], function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('added a Staffer!');
				}
			});
		}
	});
}

module.exports = seedDB;

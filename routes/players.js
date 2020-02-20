const express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Player = require('../models/player'),
	Squad = require('../models/squad'),
	middleware = require('../middleware'),
	dayjs = require('dayjs');

let now = dayjs();

// 1 - INDEX
router.get('/', middleware.isLoggedIn, (req, res) => {
	Player.find({}, (err, players) => {
		if (err) {
			console.log(err);
		} else {
			res.render('players/index', { players: players });
		}
	});
});

// 2 - CREATE
router.post('/', middleware.isLoggedIn, (req, res) => {
	// Grab input
	let name = req.body.name,
		handle = req.body.handle,
		age = req.body.age,
		squads = req.body.squads.split(', '),
		bio = req.body.bio,
		thumbnail = req.body.thumbnail,
		photograph = req.body.photograph,
		joinDate = now.format('YYYY-MM-DD');

	// // To be populated with the relevant squad _id(s)
	// let squadIDs = [];

	// // populate squadIDs with squad ObjectID references matching each name found
	// for (let i = 0; i < squads.length; i++) {
	// 	Squad.find({ name: squads[i] }, (err, squad) => {
	// 		if (err) {
	// 			console.log(err);
	// 		} else {
	// 			console.log(squad._id);
	// 			squadIDs.push(squad._id);
	// 		}
	// 	});
	// }

	let playerID = new mongoose.Types.ObjectId();

	// new Player object
	const newPlayer = new Player({
		_id: playerID,
		name: name,
		handle: handle,
		age: age,
		squads: squads,
		bio: bio,
		thumbnail: thumbnail,
		photograph: photograph,
		joinDate: joinDate
	});

	// save newPlayer
	newPlayer.save((err) => {
		if (err) {
			return handleError(err);
		} else {
			console.log('created a player!');
			res.redirect('/players');
		}
	});
});

// 3 - NEW
router.get('/new', middleware.isLoggedIn, (req, res) => {
	res.render('players/new');
});

// 4 - SHOW
router.get('/:id', middleware.isLoggedIn, (req, res) => {
	Player.findById(req.params.id, (err, player) => {
		if (err) {
			console.log(err);
		} else {
			res.render('players/show', { player: player });
		}
	});
});

// 5 - EDIT
router.get('/:id/edit', middleware.isLoggedIn, (req, res) => {
	Player.findById(req.params.id, (err, player) => {
		if (err) {
			console.log(err);
		} else {
			res.render('players/edit', { player: player });
		}
	});
});

// 6 - UPDATE
router.put('/:id', middleware.isLoggedIn, (req, res) => {
	// Squads field split into an array
	let squads = req.body.squads.split(', ');
	// To be populated with the relevant squad _id(s)
	let squadIDs = [];

	// populate squadIDs with squad ObjectID references matching each name found
	for (let i = 0; i < squads.length; i++) {
		Squad.find({ name: squads[i] }, (err, squad) => {
			if (err) {
				console.log(err);
			} else {
				squadIDs.push(squad._id);
			}
		});
	}

	let newPlayer = req.body.player;
	newPlayer.squads = squadIDs;

	Player.findByIdAndUpdate(req.params.id, newPlayer, (err, player) => {
		if (err) {
			res.redirect('/');
		} else {
			console.log('updated a player!');
			res.redirect(`/players/ + ${req.params.id}`);
		}
	});
});

// 7 - DESTROY
router.delete('/players/:id', middleware.isLoggedIn, (req, res) => {
	Player.findByIdAndRemove(req.params.id, (err, player) => {
		if (err) {
			console.log(err);
		} else {
			console.log('deleted a player!');
			res.redirect('/');
		}
	});
});

// EXPORT
module.exports = router;

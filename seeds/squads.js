const faker = require('faker'),
	seedFunction = require('../functions'),
	mongoose = require('mongoose'),
	squads = [
		{
			_id: mongoose.Types.ObjectId(),
			name: 'CSGO Gold',
			game: 'Counter-Strike: Global Offensive',
			players: [ 'leroy15', 'r1sk', 'YELLO', 'bonkd-', 'velli' ],
			description: faker.lorem.paragraph(),
			thumbnail: '../img/squads/csgo/foo.png',
			photograph: '../img/squads/csgo/foo.png',
			startYear: 2014
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: 'CSGO Purple',
			game: 'Counter-Strike: Global Offensive',
			players: [ 'EHonda', 'weWIN', 'tazyr', '66666667', 'v0L' ],
			description: faker.lorem.paragraph(),
			thumbnail: '../img/squads/csgo/foo.png',
			photograph: '../img/squads/csgo/foo.png',
			startYear: 2018
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: 'Quake',
			game: 'Quake Champions',
			players: [ 'w1llsen', 'MaRpY', 'w1llsen' ],
			description: faker.lorem.paragraph(),
			thumbnail: '../img/squads/quake/foo.png',
			photograph: '../img/squads/quake/foo.png',
			startYear: 2017
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: 'Apex Legends',
			game: 'Apex Legends',
			players: [ 'Munos', 'halozed', 'komaTTV' ],
			description: faker.lorem.paragraph(),
			thumbnail: '../img/squads/apex/foo.png',
			photograph: '../img/squads/apex/foo.png',
			startYear: 2019
		}
	];

module.exports = squads;

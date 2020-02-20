const faker = require('faker'),
	seedFunction = require('../functions'),
	mongoose = require('mongoose'),
	players = [
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'leroy15',
			age: '20',
			squads: [ 'CSGO Gold' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '3-21-2018'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'r1sk',
			age: '18',
			squads: [ 'CSGO Gold' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '3-21-2018'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'YELLO',
			age: '23',
			squads: [ 'CSGO Gold' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '1-13-2018'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'bonkd-',
			age: '20',
			squads: [ 'CSGO Gold' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '1-23-2018'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'velli',
			age: '21',
			squads: [ 'CSGO Gold' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '1-23-2018'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'EHonda',
			age: '23',
			squads: [ 'CSGO Purple' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '5-3-2019'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'weWIN',
			age: '17',
			squads: [ 'CSGO Purple' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '5-3-2019'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'tazyr',
			age: '17',
			squads: [ 'CSGO Purple' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '5-3-2019'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: '66666667',
			age: '20',
			squads: [ 'CSGO Purple' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '5-3-2019'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'v0L',
			age: '20',
			squads: [ 'CSGO Purple' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '5-3-2019'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'w1llsen',
			age: '29',
			squads: [ 'Quake' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '7-23-2017'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'MaRpY',
			age: '27',
			squads: [ 'Quake' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '7-28-2017'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'Munos',
			age: '17',
			squads: [ 'Apex Legends' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '4-15-2019'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'halozed',
			age: '19',
			squads: [ 'Apex Legends' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '4-15-2019'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'komaTTV',
			age: '19',
			squads: [ 'Apex Legends' ],
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '4-15-2019'
		}
	];

module.exports = players;

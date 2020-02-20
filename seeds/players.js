const faker = require('faker'),
	seedFunction = require('../functions'),
	mongoose = require('mongoose'),
	players = [
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'leroy15',
			age: '20',
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '3-21-2018'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'risk',
			age: '18',
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
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '1-23-2018'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'AsKeY',
			age: '29',
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '7-23-2017'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'ZERO',
			age: '27',
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
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '4-15-2019'
		},
		{
			_id: mongoose.Types.ObjectId(),
			name: faker.name.findName(),
			handle: 'konaTTV',
			age: '19',
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '4-15-2019'
		}
	];

module.exports = players;

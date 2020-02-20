const faker = require('faker'),
	seedFunction = require('../functions'),
	staffers = [
		{
			name: faker.name.findName(),
			handle: 'REXOR',
			age: '35',
			role: 'Founder',
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '5-20-2010'
		},
		{
			name: faker.name.findName(),
			handle: 'garfield',
			age: '34',
			role: 'Co-Founder',
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '5-20-2010'
		},
		{
			name: faker.name.findName(),
			handle: 'ursA',
			age: '26',
			role: 'Coach - CSGO',
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '5-3-2018'
		},
		{
			name: faker.name.findName(),
			handle: 'BUZZy',
			age: '18',
			role: 'Video Editor',
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '9-11-2017'
		},
		{
			name: faker.name.findName(),
			handle: 'tripleshot',
			age: '24',
			role: 'Graphic Designer',
			bio: faker.lorem.paragraph(),
			thumbnail: faker.image.avatar(),
			photograph: faker.image.animals(),
			joinDate: '8-7-2016'
		}
	];

module.exports = staffers;

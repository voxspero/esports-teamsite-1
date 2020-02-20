const faker = require('faker'),
	seedFunction = require('../functions'),
	sponsors = [
		{
			name: 'Logitech G',
			description: faker.lorem.paragraph(),
			thumbnail: '../img/sponsors/logitech-g/foo.png',
			logo: '../img/sponsors/logitech-g/foo.png',
			startYear: 2018
		},
		{
			name: 'Twitch',
			description: faker.lorem.paragraph(),
			thumbnail: '../img/sponsors/twitch/foo.png',
			logo: '../img/sponsors/twitch/foo.png',
			startYear: 2015
		},
		{
			name: 'Secret Labs',
			description: faker.lorem.paragraph(),
			thumbnail: '../img/sponsors/secret-labs/foo.png',
			logo: '../img/sponsors/secret-labs/foo.png',
			startYear: 2020
		},
		{
			name: 'Monster Energy',
			description: faker.lorem.paragraph(),
			thumbnail: '../img/sponsors/monster-energy/foo.png',
			logo: '../img/sponsors/monster-energy/foo.png',
			startYear: 2018
		}
	];

module.exports = sponsors;

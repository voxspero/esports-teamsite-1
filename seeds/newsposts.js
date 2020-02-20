const faker = require('faker'),
	seedFunction = require('../functions'),
	dayjs = require('dayjs');

let now = dayjs();

newsposts = [
	{
		author: faker.name.findName(),
		title: seedFunction.toTitleCase(faker.lorem.words()),
		body: faker.lorem.paragraphs(),
		game: 'Counter-Strike: Global Offensive',
		thumbnail: faker.image.image(),
		images: faker.image.image(),
		postDate: now.format('dddd, MMMM D YYYY'),
		postTime: now.format('h:mm a')
	},
	{
		author: faker.name.findName(),
		title: seedFunction.toTitleCase(faker.lorem.words()),
		body: faker.lorem.paragraphs(),
		game: 'Quake Champions',
		thumbnail: faker.image.image(),
		images: faker.image.image(),
		postDate: now.format('dddd, MMMM D YYYY'),
		postTime: now.format('h:mm a')
	},
	{
		author: faker.name.findName(),
		title: seedFunction.toTitleCase(faker.lorem.words()),
		body: faker.lorem.paragraphs(),
		game: 'Apex Legends',
		thumbnail: faker.image.image(),
		images: faker.image.image(),
		postDate: now.format('dddd, MMMM D YYYY'),
		postTime: now.format('h:mm a')
	},
	{
		author: faker.name.findName(),
		title: seedFunction.toTitleCase(faker.lorem.words()),
		body: faker.lorem.paragraphs(),
		game: 'Counter-Strike: Global Offensive',
		thumbnail: faker.image.image(),
		images: faker.image.image(),
		postDate: now.format('dddd, MMMM D YYYY'),
		postTime: now.format('h:mm a')
	},
	{
		author: faker.name.findName(),
		title: seedFunction.toTitleCase(faker.lorem.words()),
		body: faker.lorem.paragraphs(),
		game: 'Counter-Strike: Global Offensive',
		thumbnail: faker.image.image(),
		images: faker.image.image(),
		postDate: now.format('dddd, MMMM D YYYY'),
		postTime: now.format('h:mm a')
	},
	{
		author: faker.name.findName(),
		title: seedFunction.toTitleCase(faker.lorem.words()),
		body: faker.lorem.paragraphs(),
		game: 'Apex Legends',
		thumbnail: faker.image.image(),
		images: faker.image.image(),
		postDate: now.format('dddd, MMMM D YYYY'),
		postTime: now.format('h:mm a')
	},
	{
		author: faker.name.findName(),
		title: seedFunction.toTitleCase(faker.lorem.words()),
		body: faker.lorem.paragraphs(),
		game: 'Apex Legends',
		thumbnail: faker.image.image(),
		images: faker.image.image(),
		postDate: now.format('dddd, MMMM D YYYY'),
		postTime: now.format('h:mm a')
	},
	{
		author: faker.name.findName(),
		title: seedFunction.toTitleCase(faker.lorem.words()),
		body: faker.lorem.paragraphs(),
		game: 'Quake Champions',
		thumbnail: faker.image.image(),
		images: faker.image.image(),
		postDate: now.format('dddd, MMMM D YYYY'),
		postTime: now.format('h:mm a')
	},
	{
		author: faker.name.findName(),
		title: seedFunction.toTitleCase(faker.lorem.words()),
		body: faker.lorem.paragraphs(),
		game: 'Counter-Strike: Global Offensive',
		thumbnail: faker.image.image(),
		images: faker.image.image(),
		postDate: now.format('dddd, MMMM D YYYY'),
		postTime: now.format('h:mm a')
	}
];

module.exports = newsposts;

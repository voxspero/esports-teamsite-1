const mongoose = require('mongoose');

let NewsPostSchema = new mongoose.Schema({
	author: String,
	title: String,
	body: String,
	game: String,
	thumbnail: String,
	images: [],
	postDate: String,
	postTime: String,
	created: {
		type: Date,
		default: Date.now
	}
});

let NewsPost = mongoose.model('NewsPost', NewsPostSchema);

module.exports = mongoose.model('NewsPost', NewsPostSchema);

const mongoose = require('mongoose'),
	dayjs = require('dayjs');

let now = dayjs();

let StafferSchema = new mongoose.Schema({
	name: String,
	handle: String,
	age: String,
	role: String,
	bio: String,
	thumbnail: String,
	photograph: String,
	joinDate: String,
	created: {
		type: Date,
		default: Date.now
	}
});

let Staffer = mongoose.model('Staffer', StafferSchema);

module.exports = mongoose.model('Staffer', StafferSchema);

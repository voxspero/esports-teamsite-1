const seedFunctionObj = {};

seedFunctionObj.getRndInteger = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

seedFunctionObj.toTitleCase = (str) => {
	return str.replace(/\b\w+/g, (txt) => {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

module.exports = seedFunctionObj;

const   seedFunctionObj       = {};

seedFunctionObj.getRndInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};

seedFunctionObj.toTitleCase   = function(str) {
    return str.replace(
        /\b\w+/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
};

module.exports = seedFunctionObj;
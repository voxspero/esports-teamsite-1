const   mongoose    = require("mongoose"),
        dayjs       = require("dayjs");

let     now         = dayjs();

let     PlayerSchema = new mongoose.Schema({
    name:           String,
    handle:         String,
    age:            String,
    games:          [],
    bio:            String,
    thumbnail:      String,
    photograph:     String,
    joinDate:       now.format("YYYY-MM-DD"),
    created:        {
                        type: Date,
                        default: Date.now
                    }
});

let Player = mongoose.model("Player", PlayerSchema);

module.exports = mongoose.model("Player", PlayerSchema);
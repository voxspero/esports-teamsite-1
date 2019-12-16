const   mongoose    = require("mongoose");

let     SponsorSchema = new mongoose.Schema({
    name:           String,
    description:    String,
    thumbnail:      String,
    photograph:     String,
    startYear:      String,
    created:        {
                        type: Date,
                        default: Date.now
                    }
});

let Sponsor = mongoose.model("Sponsor", SponsorSchema);

module.exports = mongoose.model("Sponsor", SponsorSchema);
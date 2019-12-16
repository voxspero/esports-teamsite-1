const   mongoose    = require("mongoose");

let     SquadSchema = new mongoose.Schema({
    game:           String,
    players:        [],
    description:    String,
    thumbnail:      String,
    photograph:     String,
    startYear:      String,
    created:        {
                        type: Date,
                        default: Date.now
                    }
});

let Squad = mongoose.model("Squad", SquadSchema);

module.exports = mongoose.model("Squad", SquadSchema);
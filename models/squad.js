const mongoose      = require("mongoose");

let SquadSchema     = new mongoose.Schema({
                        _id:            mongoose.Schema.Types.ObjectId,
                        name:           String,
                        game:           String,
                        players:        [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
                        description:    String,
                        thumbnail:      String,
                        photograph:     String,
                        startYear:      String,
                        created:        {
                                            type: Date,
                                            default: Date.now
                                        }
                    });

let Squad           = mongoose.model("Squad", SquadSchema);

module.exports      = mongoose.model("Squad", SquadSchema);
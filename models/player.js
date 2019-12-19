const mongoose      = require("mongoose"),
      dayjs         = require("dayjs");

let now             = dayjs();

let PlayerSchema    = new mongoose.Schema({
                            _id:            mongoose.Schema.Types.ObjectId,
                            name:           String,
                            handle:         String,
                            age:            String,
                            squads:         [{ type: mongoose.Schema.Types.ObjectId, ref: 'Squad' }],
                            bio:            String,
                            thumbnail:      String,
                            photograph:     String,
                            joinDate:       String,
                            created:        {
                                                type: Date,
                                                default: Date.now
                                            }
                        });

let Player          = mongoose.model("Player", PlayerSchema);

module.exports      = mongoose.model("Player", PlayerSchema);
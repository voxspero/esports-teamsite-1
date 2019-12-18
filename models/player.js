const mongoose      = require("mongoose"),
      dayjs         = require("dayjs");

let now             = dayjs();

let PlayerSchema    = new mongoose.Schema({
                            _id:            Schema.Types.ObjectId,
                            name:           String,
                            handle:         String,
                            age:            String,
                            squads:         [{ type: Schema.Types.ObjectId, ref: 'Squad' }],
                            bio:            String,
                            thumbnail:      String,
                            photograph:     String,
                            joinDate:       now.format("YYYY-MM-DD"),
                            created:        {
                                                type: Date,
                                                default: Date.now
                                            }
                        });

let Player          = mongoose.model("Player", PlayerSchema);

module.exports      = mongoose.model("Player", PlayerSchema);
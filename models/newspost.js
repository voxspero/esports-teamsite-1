const   mongoose    = require("mongoose"),
        dayjs       = require("dayjs");

let     now         = dayjs();

let     NewsPostSchema = new mongoose.Schema({
    title:          String,
    body:           String,
    game:           String,
    thumbnail:      String,
    images:         [],
    postDate:       now.format("dddd, MMMM D YYYY"),
    postTime:       now.format("h:mm a"),
    created:        {
                        type: Date,
                        default: Date.now
                    }
});

let NewsPost = mongoose.model("NewsPost", NewsPostSchema);

module.exports = mongoose.model("NewsPost", NewsPostSchema);
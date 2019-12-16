const express       = require("express"),
      router        = express.Router(),
      middleware    = require("../middleware");

// 1 - INDEX
router.get("/", (req, res) => {
    Staffer.find({}, (err, staffers) => {
        if(err){
            console.log(err);   
        } else {
            res.render("about/index", { staffers: staffers });
        }
    });
});

// EXPORT
module.exports = router;
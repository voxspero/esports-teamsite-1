const express       = require("express"),
      router        = express.Router(),
      Staffer       = require("../models/staffer"),
      middleware    = require("../middleware");

// 1 - INDEX
router.get("/", middleware.isLoggedIn, (req, res) => {
    Staffer.find({}, (err, staffers) => {
        if(err){
            console.log(err);   
        } else {
            res.render("staffers/index", { staffers: staffers });
        }
    });
});

// 2 - CREATE
router.post("/", middleware.isLoggedIn, (req, res) => {
    let name		    = req.body.name,
        age             = req.body.age,
        role            = req.body.role,
        bio             = req.body.bio,
        thumbnail       = req.body.thumbnail,
		photograph 	    = req.body.photograph,
        newStaffer 	= {
                        name		    = name,
                        age             = age,
                        role            = role,
                        bio             = bio,
                        thumbnail       = thumbnail,
                        photograph 	    = photograph
                    };

    Staffer.create(newStaffer, (err, staffer) => {
        if(err) {
            console.log(err);
        } else {
            console.log("created a staffer!");
            res.redirect("/staffers");
        }
    });
});

// 3 - NEW
router.get("/new", middleware.isLoggedIn, (req, res) => {
    res.render("staffers/new");
});

// 4 - SHOW
router.get("/:id", middleware.isLoggedIn, (req, res) => {
    Staffer.findById(req.params.id, (err, staffer) => {
        if(err){
            console.log(err);
        } else {
            res.render("staffers/show", { staffer: staffer });
        }
    });
});

// 5 - EDIT
router.get("/:id/edit", middleware.isLoggedIn, (req, res) => {
    Staffer.findById(req.params.id, (err, staffer) => {
        if(err){
            console.log(err);
        } else {
            res.render("staffers/edit", { staffer: staffer });
        }
    });
});

// 6 - UPDATE
router.put("/:id", middleware.isLoggedIn, (req, res) => {
    Staffer.findByIdAndUpdate(req.params.id, req.body.staffer, (err, staffer) => {
        if(err){
            res.redirect("/");
        } else {
            console.log("updated a staffer!");
            res.redirect(`/staffers/ + ${req.params.id}`);
        }
    });
});

// 7 - DESTROY
router.delete("/staffers/:id", middleware.isLoggedIn, (req, res) => {
    Staffer.findByIdAndRemove(req.params.id, (err, staffer) => {
        if(err){
            console.log(err);
        } else {
            console.log("deleted a staffer!");
            res.redirect("/");
        }
    });
});

// EXPORT
module.exports = router;
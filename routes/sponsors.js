const express       = require("express"),
      router        = express.Router(),
      Sponsor       = require("../models/sponsor"),
      middleware    = require("../middleware");

// 1 - INDEX
router.get("/", (req, res) => {
    Sponsor.find({}, (err, sponsors) => {
        if(err){
            console.log(err);   
        } else {
            res.render("sponsors/index", { sponsors: sponsors });
        }
    });
});

// 2 - CREATE
router.post("/", (req, res) => {
    let name		    = req.body.name,
        description     = req.body.description,
        thumbnail       = req.body.thumbnail,
		logo 	        = req.body.logo,
        startYear 	    = req.body.startYear;
        
    const newSponsor 	= new Sponsor({
                            name:           name,     
                            description:    description,
                            thumbnail:      thumbnail,
                            logo:           logo,
                            startYear:      startYear
                        });

    newSponsor.save((err) => {
        if (err) {
            return handleError(err);
        } else {
            console.log("created a sponsor!");
            res.redirect("/sponsors");
        }
    });
});

// 3 - NEW
router.get("/new", middleware.isLoggedIn, (req, res) => {
    res.render("sponsors/new");
});

// 4 - SHOW
router.get("/:id", (req, res) => {
    Sponsor.findById(req.params.id, (err, sponsor) => {
        if(err){
            console.log(err);
        } else {
            res.render("sponsors/show", { sponsor: sponsor });
        }
    });
});

// 5 - EDIT
router.get("/:id/edit", middleware.isLoggedIn, (req, res) => {
    Sponsor.findById(req.params.id, (err, sponsor) => {
        if(err){
            console.log(err);
        } else {
            res.render("sponsors/edit", { sponsor: sponsor });
        }
    });
});

// 6 - UPDATE
router.put("/:id", (req, res) => {
    Sponsor.findByIdAndUpdate(req.params.id, req.body.sponsor, (err, sponsor) => {
        if(err){
            res.redirect("/");
        } else {
            console.log("updated a sponsor!");
            res.redirect(`/sponsors/ + ${req.params.id}`);
        }
    });
});

// 7 - DESTROY
router.delete("/sponsors/:id", middleware.isLoggedIn, (req, res) => {
    Sponsor.findByIdAndRemove(req.params.id, (err, sponsor) => {
        if(err){
            console.log(err);
        } else {
            console.log("deleted a sponsor!");
            res.redirect("/");
        }
    });
});

// EXPORT
module.exports = router;
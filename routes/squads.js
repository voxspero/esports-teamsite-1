const express       = require("express"),
      router        = express.Router(),
      Squad         = require("../models/squad"),
      Player        = require("../models/player"),
      middleware    = require("../middleware");

// 1 - INDEX
router.get("/", (req, res) => {
    Squad.find({}, (err, squads) => {
        if(err){
            console.log(err);   
        } else {
            res.render("squads/index", { squads: squads });
        }
    });
});

// 2 - CREATE
router.post("/", middleware.isLoggedIn, (req, res) => {
    // Grab input
    let name		    = req.body.name,
        game		    = req.body.game,
        players         = req.body.players.split(", ");
        description     = req.body.description,
        thumbnail       = req.body.thumbnail,
        photograph 	    = req.body.photograph,
        startYear 	    = req.body.startYear;

    // To be populated with the relevant player _id(s)
    let playerIDs        = [];   
    
    // populate playerIDs with ObjectID references matching each player found
    for(let i = 0; i < players.length; i++) {
        Player.find({ handle: players[i] }, (err, player) => {
            if(err) {
                console.log(err);
            } else {
                playerIDs.push(player._id);
            }
        });
    }

    // new Squad object
    const newSquad     = new Squad({
                            _id:            new mongoose.Types.ObjectId(),
                            name:           name,
                            game:           game,
                            players:        playerIDs,
                            description:    description,
                            thumbnail:      thumbnail,
                            photograph:     photograph,
                            startYear:      startYear
                        });

    // save newSquad            
    newSquad.save((err) => {
        if (err) {
            return handleError(err);
        } else {
            console.log("created a squad!");
            res.redirect("/squads");
        }
    });
});

// 3 - NEW
router.get("/new", middleware.isLoggedIn, (req, res) => {
    res.render("squads/new");
});

// 4 - SHOW
router.get("/:id", (req, res) => {
    Squad.findById(req.params.id, (err, squad) => {
        if(err){
            console.log(err);
        } else {
            res.render("squads/show", { squad: squad });
        }
    });
});

// 5 - EDIT
router.get("/:id/edit", middleware.isLoggedIn, (req, res) => {
    Squad.findById(req.params.id, (err, squad) => {
        if(err){
            console.log(err);
        } else {
            res.render("squads/edit", { squad: squad });
        }
    });
});

// 6 - UPDATE
router.put("/:id", middleware.isLoggedIn, (req, res) => {
    let players         = req.body.players.split(" ");

    let playerObjects   = [];  
    
    for(let i = 0; i < players.length; i++) {
        Player.find({ handle: players[i] }, (err, player) => {
            if(err) {
                console.log(err);
            } else {
                playerObjects.push(player);
            }
        });
    }

    let newSquad = req.body.squad;
    newSquad.players = playerObjects;

    Squad.findByIdAndUpdate(req.params.id, newSquad, (err, squad) => {
        if(err){
            res.redirect("/");
        } else {
            console.log("updated a SQUAD!");
            res.redirect(`/squads/ + ${req.params.id}`);
        }
    });
});

// 7 - DESTROY
router.delete("/squads/:id", middleware.isLoggedIn, (req, res) => {
    Squad.findByIdAndRemove(req.params.id, (err, squad) => {
        if(err){
            console.log(err);
        } else {
            console.log("deleted a SQUAD!");
            res.redirect("/");
        }
    });
});

// EXPORT
module.exports = router;
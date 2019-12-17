const express       = require("express"),
      router        = express.Router(),
      Player        = require("../models/player"),
      middleware    = require("../middleware");

// 1 - INDEX
router.get("/", middleware.isLoggedIn, (req, res) => {
    Player.find({}, (err, players) => {
        if(err){
            console.log(err);   
        } else {
            res.render("players/index", { players: players });
        }
    });
});

// 2 - CREATE
router.post("/", middleware.isLoggedIn, (req, res) => {
    let name		    = req.body.name,
        age             = req.body.age,
        handle          = req.body.handle,
        games           = req.body.games.split(" ");
        bio             = req.body.bio,
        thumbnail       = req.body.thumbnail,
		photograph 	    = req.body.photograph,
        newPlayer 	= {
                        name		    = name,
                        age             = age,
                        handle          = handle,
                        games           = games,
                        bio             = bio,
                        thumbnail       = thumbnail,
                        photograph 	    = photograph
                    };

    Player.create(newPlayer, (err, player) => {
        if(err) {
            console.log(err);
        } else {
            console.log("created a player!");
            res.redirect("/players");
        }
    });
});

// 3 - NEW
router.get("/new", middleware.isLoggedIn, (req, res) => {
    res.render("players/new");
});

// 4 - SHOW
router.get("/:id", middleware.isLoggedIn, (req, res) => {
    Player.findById(req.params.id, (err, player) => {
        if(err){
            console.log(err);
        } else {
            res.render("players/show", { player: player });
        }
    });
});

// 5 - EDIT
router.get("/:id/edit", middleware.isLoggedIn, (req, res) => {
    Player.findById(req.params.id, (err, player) => {
        if(err){
            console.log(err);
        } else {
            res.render("players/edit", { player: player });
        }
    });
});

// 6 - UPDATE
router.put("/:id", middleware.isLoggedIn, (req, res) => {
    Player.findByIdAndUpdate(req.params.id, req.body.player, (err, player) => {
        if(err){
            res.redirect("/");
        } else {
            console.log("updated a player!");
            res.redirect(`/players/ + ${req.params.id}`);
        }
    });
});

// 7 - DESTROY
router.delete("/players/:id", middleware.isLoggedIn, (req, res) => {
    Player.findByIdAndRemove(req.params.id, (err, player) => {
        if(err){
            console.log(err);
        } else {
            console.log("deleted a player!");
            res.redirect("/");
        }
    });
});

// EXPORT
module.exports = router;
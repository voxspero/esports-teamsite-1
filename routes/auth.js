const express       = require("express"),
      router        = express.Router(),
      passport      = require("passport"),
      User          = require("../models/user"),
      middleware    = require("../middleware");

// AUTH ROUTES

// Register

router.get("/register", (req, res) => {
    res.render("register");
});

// Register - POST

router.post("/register", middleware.isLoggedIn, (req, res) => {
    let newUser     = new User({username: req.body.username});

    User.register(newUser, req.body.password, (err, user) => {
        if(err) { 
            console.log(err);
        } 
        passport.authenticate("local")(req, res, function(){
           res.redirect("/images"); 
        });
    });
});

// Login

router.get("/login", (req, res) => {
    res.render("login");
});

// Login - POST

router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/images",
        failureRedirect: "/login"
    }), (req, res) => {
});

// Logout

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/images");
});

module.exports = router;
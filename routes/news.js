const express       = require("express"),
      router        = express.Router(),
      NewsPost      = require("../models/newspost"),
      middleware    = require("../middleware");

// 1 - INDEX
router.get("/", (req, res) => {
    NewsPost.find({}, (err, newsposts) => {
        if(err){
            console.log(err);   
        } else {
            res.render("news/index", { newsposts: newsposts });
        }
    });
});

// 2 - CREATE
router.post("/", (req, res) => {
    let title		    = req.body.title,
        body            = req.body.body,
        game            = req.body.game,
        thumbnail       = req.body.thumbnail,
        images 	        = req.body.images.split(" ");
        newPost      	= {
                            title		    = title,
                            body            = body,
                            game            = game,
                            thumbnail       = thumbnail,
                            images 	        = images
                        };

    NewsPost.create(newPost, (err, newspost) => {
        if(err) {
            console.log(err);
        } else {
            console.log("created a news post!");
            res.redirect("/news");
        }
    });
});

// 3 - NEW
router.get("/new", middleware.isLoggedIn, (req, res) => {
    res.render("news/new");
});

// 4 - SHOW
router.get("/:id", (req, res) => {
    NewsPost.findById(req.params.id, (err, newspost) => {
        if(err){
            console.log(err);
        } else {
            res.render("news/show", { newspost: newspost });
        }
    });
});

// 5 - EDIT
router.get("/:id/edit", middleware.isLoggedIn, (req, res) => {
    NewsPost.findById(req.params.id, (err, newspost) => {
        if(err){
            console.log(err);
        } else {
            res.render("news/edit", { newspost: newspost });
        }
    });
});

// 6 - UPDATE
router.put("/:id", (req, res) => {
    NewsPost.findByIdAndUpdate(req.params.id, req.body.newspost, (err, newspost) => {
        if(err){
            res.redirect("/");
        } else {
            console.log("updated a news post!");
            res.redirect(`/news/ + ${req.params.id}`);
        }
    });
});

// 7 - DESTROY
router.delete("/news/:id", middleware.isLoggedIn, (req, res) => {
    NewsPost.findByIdAndRemove(req.params.id, (err, newspost) => {
        if(err){
            console.log(err);
        } else {
            console.log("deleted a news post!");
            res.redirect("/");
        }
    });
});

// EXPORT
module.exports = router;
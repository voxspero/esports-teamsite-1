// --------------------------------------
// {} - REQUIREMENTS / DECLARATIONS
// --------------------------------------

const   express         = require("express"),
        app             = express(),
        session         = require("express-session"),
        bodyParser      = require("body-parser"),
        passport        = require("passport"),
        LocalStrategy   = require("passport-local"),
        mongoose        = require("mongoose"),
        // seebDB          = require("./seeds"),
        mongooseOptions = {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false
                        },
        dbUrl           = process.env.DATABASEURL;
        // "mongodb://localhost/portfolio";

// --------------------------------------        
// ROUTES
// --------------------------------------

// const    fooRoutes   = require("./routes/foo"),
//          barRoutes   = require("./routes/bar");

// --------------------------------------
// APP CONFIG
// --------------------------------------

mongoose.connect(dbUrl, mongooseOptions, 
    () => console.log(`Connected to DB!`));

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// seedDB();

// --------------------------------------
// APP ROUTES
// --------------------------------------

// app.use("/path", routeVariable);

// --------------------------------------
// INDEX ROUTE
// --------------------------------------

app.get("/", 
    (req,res) => res.render("landing"));

// --------------------------------------
// SERVER (PORT=3000)
// --------------------------------------

app.listen(process.env.PORT, 
    () => console.log(`Listen server started on port ${process.env.PORT}.`));

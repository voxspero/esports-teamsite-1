// --------------------------------------
// {} - REQUIREMENTS / DECLARATIONS
// --------------------------------------

require('dotenv').config();

const express = require('express'),
	app = express(),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	LocalStrategy = require('passport-local'),
	User = require('./models/user'),
	seedDB = require('./seeds'),
	mongooseOptions = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	},
	dbUrl = process.env.DATABASEURL;
// "mongodb://localhost/esports-teamsite-1"

// --------------------------------------
// ROUTES
// --------------------------------------

const authRoutes = require('./routes/auth'),
	aboutRoutes = require('./routes/about'),
	newsRoutes = require('./routes/news'),
	playerRoutes = require('./routes/players'),
	sponsorRoutes = require('./routes/sponsors'),
	squadRoutes = require('./routes/squads'),
	stafferRoutes = require('./routes/staffers');

// --------------------------------------
// APP CONFIG
// --------------------------------------

mongoose.connect(dbUrl, mongooseOptions, () => console.log(`Connected to DB!`));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
seedDB();

// --------------------------------------
// PASSPORT CONFIG
// --------------------------------------

app.use(
	session({
		secret: 'lol hi',
		resave: false,
		saveUninitialized: false
	})
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});

// --------------------------------------
// APP ROUTES
// --------------------------------------

app.use('/', authRoutes);
app.use('/about', aboutRoutes);
app.use('/news', newsRoutes);
app.use('/players', playerRoutes);
app.use('/sponsors', sponsorRoutes);
app.use('/squads', squadRoutes);
app.use('/staffers', stafferRoutes);

// --------------------------------------
// INDEX ROUTE
// --------------------------------------

app.get('/', (req, res) => res.render('landing'));

// --------------------------------------
// SERVER (PORT=3000)
// --------------------------------------

app.listen(process.env.PORT, () => console.log(`Listen server started on port ${process.env.PORT}.`));

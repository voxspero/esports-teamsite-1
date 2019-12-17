This is a practice website based on a fictional esports organization.

- MongoDB database, managed using Mongoose.js and a user interface in-browser. 
- The database stores objects for news posts, players, squads, sponsors, and staff members.
- Served via Express.js
- Passport.js is used to manage authentication, and content is added via forms accessible only by administrators.
- Passport.js middleware is utilized to block HTTP requests by unauthenticated users in addition to gatekeeping routes.
- Embedded JavaScript is used to render content in-browser. 
- Bootstrap is the basis of the site's CSS.
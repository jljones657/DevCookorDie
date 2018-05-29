const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var methodOverride = require("method-override");
var multer = require("multer");


var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//to be able to use page links
app.use(express.static("public"));
app.use(express.static("images"));
forceGet:true;



app.use(methodOverride("_method"));


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Import routes and give the server access to them.
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
// Dependencies
// =============================================================
let db= require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    db.Recipe.findAll({}).then(function (recipes_db) {
      let hbsObject = {
        recipes: recipes_db
      };
      console.log('HTML Routes - hbsObject', JSON.stringify(hbsObject))
      res.render("index", hbsObject)
    })
  });


};
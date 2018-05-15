var db = require("../models");

module.exports = function(app) {
  
  // Find all Authors and return them to the user with res.json
  app.get("/api/recipes", function(req, res) {
    db.Recipe.findAll({}).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

    // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Recipe.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
    .then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });



};
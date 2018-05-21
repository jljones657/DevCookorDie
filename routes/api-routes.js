var db = require("../models");

module.exports = function(app) {
  
  // Find all Authors and return them to the user with res.json
  app.get("/api/recipes", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Recipe.findAll({})
    .then(function(dbRecipe){
        res.json(dbRecipe);
    })

  });

    // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Recipe.create({
      name: req.body.name,
      image: req.body.image,
      foodType: req.body.foodType
    })
    .then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });



};
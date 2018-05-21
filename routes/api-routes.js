var db = require("../models");

module.exports = function(app) {
  


  app.post("/api/ingredients/", function(req, res) {
    db.Recipe.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  app.get("/api/ingredients", function(req, res) {
    db.Recipe.findAll({}).then( function (dbRecipe) {
      console.log ("Api routes all the ingredient objects \n ", dbRecipe);
      res.json(dbRecipe);
    }).catch( err => res.json(err))
  });


  //Delete route for deleting ingredients
  app.delete("/api/ingredients/:id", function(req, res){
    db.Ingredient.destroy({
      where: {
        id: req.params.id
      }
    }).then( function(dbRecipe) {
      console.log("Api routes: DELETE works: \n", dbRecipe);
      res.json(dbRecipe);
    }).catch( err => res.json(err))
  });



};

//"\n\tRecipe.name: ", req.body.addIngredient I had this on line 11, hopefully removing it makes this work
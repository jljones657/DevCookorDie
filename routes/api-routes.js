var db = require("../models");

module.exports = function(app) {
  

  //Route for creating Ingredients
  app.post("/api/ingredients/", function(req, res) {
    db.Ingredient.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  //Route for getting Ingredients
  app.get("/api/ingredients", function(req, res) {
    db.Ingredient.findAll({}).then( function (dbRecipe) {
      console.log ("Api routes all the ingredient objects \n ", dbRecipe);
      res.render("index", {ingredient:dbIngredient})
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

  app.get("/api/recipes", function(req, res){
    db.Recipe.findAll({
      include: [{
        model: db.Ingredient,
        through: {
          attributes: ['id'],
          where: {completed: true}
        }
      }]
    })
  });

}
  
  

  





//"\n\tRecipe.name: ", req.body.addIngredient I had this on line 11, hopefully removing it makes this 
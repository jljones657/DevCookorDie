var db = require("../models");

module.exports = function(app) {
  
  // Post route for adding an ingredient
  app.post("/api/ingredients", function(req, res) {
    //Add sequelize code for creating a ingredient using req.body
    //return a result using res.json
    console.log("Api Routes: Post is being requested \n",
      "\tRecipe.name: ", req.body.name)
    db.Recipe.create({
      name:req.body.name
    }).then(dbRecipe => res.json(dbRecipe))
    .catch( function(err){
      console.log("Api Routes: Ingredient created error!!!: \n", err);
      res.json(err);
      console.log(res.json(err));
    });
  });

  app.get("/api/ingredients", function(req, res) {
    db.Recipe.findAll({}).then( function (dbRecipe) {
      console.log ("Api routes all the ingredient objects \n ", dbRecipe);
      res.json(dbRecipe);
    }).catch( err => res.json(err))
  });

    // POST route for saving a new ingredient
  app.post("/api/ingredients", function(req, res) {
    console.log(req.body.name);
    db.Recipe.create({
      //Should be req.body.name
      name: req.body.name,
    })
    .then(function(dbRecipe) {
      res.json(dbRecipe);
    });
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
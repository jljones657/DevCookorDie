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
      // res.json(dbRecipe);
    }).catch( err => res.json(err))
  });


  //Delete route for deleting ingredients
  // app.delete("/api/ingredients/:id", function(req, res){
  //   db.Ingredient.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(data) {
  //     res.json(data);
  //   });
  // });

  app.delete("/recipes/:id", function(req, res){
    db.Ingredient.destroy({
     where: {
       id: req.params.id
     }
   }).then(function(data) {
     res.json(data);
   });
   })

  // app.get("/api/recipes", function(req, res){
  //   db.Ingredient.findAll({
  //     include: [{
  //       model: db.Recipe,
  //       through: {
  //         where: { state: Sequelize.col("ingredient.state") }
  //       }
  //     }]
  //   })
  // });


  //find all the recipes associated with the entered ingredients
  app.post("/recipes", (req, res) => {
    console.log('foo');
    // console.log(req.query);
    db.Ingredient.findOne({
        where: {
            name: req.body.ingredient
        },
        include: [
            { model: db.Recipe },
        ]
    }).then(function(results){
      res.json(results);
    }).catch( err => res.json(err));
    
    // .then((ingredient) => {
    //   // logic
    //     const results = {};

    //     const recipes = ingredient.Recipes;

    //     for (var i = 0; i < recipes.length; i++) {
    //       results[i] = recipes[i].name
    //     }

    //     res.json({
    //       recipes: recipes,
    //       results: results
    //     });
    //     console.log(results);
    //     // res.render("index", {info:results})
    // }).catch((err) => {
    //     res.json(err);
    // });

    
    // //Code that I want to use with handlebars
    
    
    
    
// });

  // app.get("/", function(req, res){
  //   res.redirect("/recipes");
  // })
  app.get("/recipes", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Ingredient.findAll({})
    .then(function(dbIngredient){
      res.render("index", { data:dbIngredient })
    })
  });

}
  
  

  





//"\n\tRecipe.name: ", req.body.addIngredient I had this on line 11, hopefully removing it makes this 
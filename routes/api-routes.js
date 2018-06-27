var db = require("../models");
var  Ingredient = require("../models").Ingredient;
var  Recipe = require("../models").Recipe;

module.exports = function(app) {

  //Route for getting Ingredients
  app.get("/api/ingredients", function(req, res) {
    db.Ingredient.findAll({}).then( function (dbRecipe) {
      console.log ("Api routes all the ingredient objects \n ", dbRecipe);
      res.render("index", {ingredient:dbIngredient})
      res.json(dbRecipe);
    }).catch( err => res.json(err))
  });

  app.delete("/recipes/:id", function(req, res){
    db.Ingredient.destroy({
     where: {
       id: req.params.id
     }
   }).then(function(data) {
     res.json(data);
   });
   })

   app.get("/", function(req, res){
    res.redirect("/recipes");
  })


  

//This shows all of the ingredients in the page reflecting from the database
app.get("/recipes",function(req, res) {
  Recipe.findAll({
    include:[{
      model: Ingredient,
      // as: "IngredientsInRecipe",
      all: true
        // },{
        //   model: Recipe,
        //   as: "RecipeWithIngredients",
        //   all: true,
        //   through: {attributes:[]}

        // }
    }]
  }).then(function(recipe){
      res.render("index", { recipe:recipe })
      // console.log(recipe);
  })
})

 //Route for creating Recipes
 app.post("/recipes", function(req, res) {
  Recipe.create({
    ...req.body, IngredientId: req.params.ingredient_id
  },{
    include:[{
      model: Ingredient,
      all: true
    }]
  })
  .then(function(dbRecipe) {
        res.redirect("/recipes");


  });
});

//Route for adding ingredients into the database
app.post("/recipes/:recipe_id", function(req, res){
  Ingredient.create({
    name: req.body.name,
    type: req.body.type,
    IngredientId: req.params.ingredient_id,  
  // },{
  //   include: [
  //     {model: Recipe,through: {}}, 
  //     {model: Recipe, attributes: ["recipeId", "name"]}
  //            ]
  // 
})
    .then(function(associateRecipes){
      var type = req.body.type;
      var name = req.body.name;

      if( name === "tortilla" || name === "rice" || name === "beans" ){
        
        associateRecipes.setRecipes([1,4])

      } else if(name === "cheese" || name === "tomatoe" || type === "meat"){
        associateRecipes.setRecipes([1,3,4])
      }


      res.redirect("/recipes")
    })

})

// Ingredient.findById(1).then(ingredients=>{
//   ingredients.setRecipes([1,3]).then(sc=>{
//       console.log(sc);
//   });
// });

}
  

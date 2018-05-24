var db = require("../models");
var  Ingredient = require("../models").Ingredient;
var  Recipe = require("../models").Recipe;

module.exports = function(app) {
  app.post("/recipes", function(req, res) {
    Recipe.create({
      name:"Spaguetti"
    }).then(function(dbRecipe) {
      dbRecipe.createIngredient({
        name: "onion",
        type:"vegetable"
      }).then(function(){
        console.log("it worked")
      });
  
    });
  });

  //Route for creating Ingredients
  app.post("/recipes", function(req, res) {
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
  app.get("/recipes", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Ingredient.findAll({})
    .then(function(dbIngredient){
      res.render("index", { data:dbIngredient })
    })
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



    // app.get("/recipes", (req, res) => {
    // console.log('foo');
    // // console.log(req.query);
    // db.Ingredient.findAll({
    //     name:req.body.name
    // }).then(function(results){
    //   res.render("index", { info:results });
    //   console.log(results);
    // }).catch( err => res.json(err)); 
    
    // .then((ingredient) => {
      // logic
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

// app.get('/recipes', (req, res) => {  
//   db.Ingredient.findAll({
//     include: [
//       {
//         model: db.Recipe,
//       }
//     ]
//   }).then(Ingredient => {
//     // const resObj = Ingredient.map(results => {

//     //   //tidy up the user data
//     //   return Object.assign(
//     //     {},
//     //     {
//     //       ingredient_id: Ingredient.id,
//     //       name: Ingredient.name,
//     //       // ingredient_recipe: Ingredient.Recipe.map(recipe => {

//     //       //   //tidy up the post data
//     //       //   // return Object.assign(
//     //       //   //   {},
//     //       //   //   {
//     //       //   //     recipe_id: recipe.id,
//     //       //   //     name: recipe.Ingredient.name,
//     //       //   //   }
//     //       //   //   )
//     //       // })
//     //     }
//     //   )
//     // });
//     // res.render("index", { info:results });
//   });
// });



  //find all the recipes associated with the entered ingredients
//   app.get("/recipes", (req, res) => {
//     console.log('foo');
//     // console.log(req.query);
//     db.Ingredient.findAll({
//         where: {
//             name: req.body.name
//         },
//         include: [
//             { model: db.Recipe },
//         ]
//     }).then(function(results){
//       res.render("index", { info:results });
//       console.log(results);
//     }).catch( err => res.json(err)); 
    
//     // .then((ingredient) => {
//       // logic
//     //     const results = {};

//     //     const recipes = ingredient.Recipes;

//     //     for (var i = 0; i < recipes.length; i++) {
//     //       results[i] = recipes[i].name
//     //     }

//     //     res.json({
//     //       recipes: recipes,
//     //       results: results
//     //     });
//     //     console.log(results);
//     //     // res.render("index", {info:results})
//     // }).catch((err) => {
//     //     res.json(err);
//     // });

    
//     // //Code that I want to use with handlebars
     
// });




}
  
  

  





//"\n\tRecipe.name: ", req.body.addIngredient I had this on line 11, hopefully removing it makes this 
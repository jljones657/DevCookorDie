var db = require("../models");

module.exports = function(app){

  app.get("/", function(req, res){
    res.redirect("/recipes");
  })

  app.get("/recipes", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Recipe.findAll({})
    .then(function(dbIngredient){
      res.render("index", { data:dbIngredient })
    })

  });

  app.get("/recipes/new", function(req, res){
    res.render("new");
  })


  app.post("/recipes", function(req, res) {
    db.Recipe.create(req.body).then(function(dbRecipe) {
      res.redirect("/recipes")
    });
  });

  app.get("/recipes/:id", function(req, res){
   db.Recipe.findOne({
     where: {
       id: req.params.id
     }
   }).then(function(ingredientSearch){
    res.render("show", { data:ingredientSearch })
   })
  })

  app.get("/recipes/:id/edit", function(req, res){
    db.Recipe.findOne({
    where: {
      id: req.params.id
    }  
    }).then(function(updatedIngredients){
      res.render("edit", {data:updatedIngredients});
    })
   
  })

  app.put("/recipes/:id", function(req,res){
     db.Recipe.update({
      name: req.body.name
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  app.delete("/recipes/:id", function(req, res){
   db.Recipe.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    res.json(data);
  });
  })
 
};

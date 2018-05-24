module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
      name: DataTypes.STRING,
  }, {
    // disable timestamps
    // timestamps: false
  });

  Recipe.associate = function(models) {
    Recipe.belongsToMany(models.Ingredient, {
      through: "recipe_ingredients"
    });
  };
Recipe.associate = (models) => {
  Recipe.hasMany(models.Ingredient,{
    foreingKey: "name",

  });

}

// return Ingredient;  
  return Recipe;
};

// module.exports = function(sequelize, DataTypes) {
//   var Recipes = sequelize.define("Recipes", {
//       name: DataTypes.STRING,
//   }, {
//     // disable timestamps
//     // timestamps: false
//   });

//   // Ingredient.associate = function(models){
//   //   Ingredient.belongsToMany(models.Recipe, {
//   //       through: "recipe_ingredients"
//   //   });
//   // };

//   Recipes.associate = (models) => {
//     Recipe.hasMany(models.Ingredient,{
//       foreingKey: "name",

//     });

//   }

//   return Recipes;
// };



// module.exports = function(sequelize, DataTypes){
//   var Recipe = sequelize.define("Recipe",{
  
//     name: DataTypes.STRING,
    
  
//   }, {
//     price: DataTypes.INTEGER
//   },
//   {
//     productImage: DataTypes.STRING
//   },
//   {

//     timestamps: false
//   }
// )
//   return Recipe;
// }

// var userData = [{
//   name: "Chile Relleno",
//   photo: "chile.jpg",
//   scores:[
//       "Poblano pepper",
//       "Tomato",
//       "Egg",
//       "Beef",
//       "Onion"
//      ]

// },

// {
//   name: "Ligurian Pesto with spaghetti",
//   photo: "ligurian-pesto-with-spaghetti.jpg",
//   scores:[
//       "Spaghetti",
//       "Grated Permesan",
//       "Basil Leaves",
//       "Garlic",
//       "Olive oil"
     
//      ]
// },

// {
//   name: "Grilled Broccoli with Avocado",
//   photo: "Broc Salad_20170522 WEB10237.jpg",
//   scores:[
//       "Avocado",
//       "Onion",
//       "Brocoli",
//       "Cilantro"
   
//      ]
// },

// ]
// module.exports = userData;




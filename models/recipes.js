"use strict";
module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
      name: DataTypes.STRING,
      
  }, {
    // disable timestamps
    timestamps: false
  },{});
// recipe has many ingredients
  Recipe.associate = function(models) {
    Recipe.belongsToMany(models.Ingredient, {
      through: "recipeingredients",
      // as: "IngredientsInRecipe",
      foreignKey: "recipe_id",
      id:{
        type : sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        validate: {
          len: {
              args: 3,
              msg: "Name must be atleast 3 characters in length"
          }
      }
      }
    });
  };
      
  return Recipe;
};



// module.exports = function(sequelize, DataTypes) {
//   var Recipe = sequelize.define("Recipe", {
//       name: DataTypes.STRING,
      
//   }, {
//     // disable timestamps
//     timestamps: false
//   },{});
// // recipe has many ingredients
//   Recipe.associate = function(models) {
//     Recipe.hasMany(models.Ingredient, {
//       // through: "recipe_ingredients"
//     });
//   };
      
//   return Recipe;
// };












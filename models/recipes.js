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
    Recipe.hasMany(models.Ingredient, {
      // through: "recipe_ingredients"
    });
  };
      
  return Recipe;
};












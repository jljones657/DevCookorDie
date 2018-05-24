module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
      name: DataTypes.STRING,
  }, {
    // disable timestamps
    timestamps: false
  });

  Recipe.associate = function(models) {
    Recipe.belongsToMany(models.Ingredient, {
      through: "recipe_ingredients"
    });
  };
      
  return Recipe;
};












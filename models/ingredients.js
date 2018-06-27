
"use strict";

module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define("Ingredient", {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      // recipeId: DataTypes.INTEGER
  }, {
    // disable timestamps
    timestamps: false
  });

  Ingredient.associate = function(models){
    Ingredient.belongsToMany(models.Recipe, {
        through: "recipeingredients", 
        // as: "RecipeWithIngredients",
        foreignKey: "ingredient_id",
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

  return Ingredient;
};


// module.exports = function(sequelize, DataTypes) {
//   var Ingredient = sequelize.define("Ingredient", {
//       name: DataTypes.STRING,
//       type: DataTypes.STRING,
//       // recipeId: DataTypes.INTEGER
//   }, {
//     // disable timestamps
//     timestamps: false
//   });

//   Ingredient.associate = function(models){
//     Ingredient.belongsTo(models.Recipe);
//   };

//   return Ingredient;
// };
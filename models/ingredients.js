
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
    Ingredient.belongsTo(models.Recipe);
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
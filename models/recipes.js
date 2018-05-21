module.exports = function(sequelize, DataTypes){
  var Recipe = sequelize.define("Recipe",{
    name: DataTypes.STRING,

  })
  return Recipe;
}









// module.exports = function(sequelize, DataTypes) {
//   var Recipe = sequelize.define("Recipe", {
//       name: DataTypes.STRING,
//   });
      

//   return Recipe;
// };



// I think this code is breaking the sequelize connection
// allowNull: false,
//       validate: {
//         len: [1, 20]
//       }
//     },
//     addIngredient: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true
//     }
//   }, {
//     // disable timestamps
//     timestamps: false
//   }

//   );
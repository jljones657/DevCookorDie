module.exports = function(sequelize, DataTypes){
  var Recipe = sequelize.define("Recipe",{
  
    name: DataTypes.STRING,
    
  }, {

    timestamps: false

  })
  return Recipe;
}



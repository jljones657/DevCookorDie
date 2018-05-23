module.exports = function(sequelize, DataTypes){
  var Recipe = sequelize.define("Recipe",{
  
    name: DataTypes.STRING,
    
  
  }, {
    price: DataTypes.INTEGER
  },
  {
    productImage: DataTypes.STRING
  },
  {

    timestamps: false
  }
)
  return Recipe;
}

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




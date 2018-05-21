// $(document).ready(function(){
//     var $newIngredient = $("#ingredient");

//     $(document).on("submit", "#ingredient", insertIngredient);
    
//     var ingredients = [];

//     getIngredients();

//     function getIngredients() {
//         $.get("/api/ingredients", function(data) {
//           ingredients = data;
//         });
//       }
    
//     function insertIngredient(event) {
//         event.preventDefault();
        
//         var recipe = {
//           name: $newIngredient.val().trim(),
//         };

//         $.ajax({
//             method: "PUT",
//             url: "/api/ingredients",
//             data: ingredients
//           }).
    
//         $.post("/api/ingredients", recipe, getIngredients);
//         $newIngredient.val("");
//       }
// })













//Wait to attach the handlers until the DOM is fully loaded
$(document).ready(function() {
    console.log("running the recipe.js function")

    var newIngredient = $("#ingredient");

    //create a new ingredient (I will probably need to get rid of this, and have typehead.js look through available ingredients)
    $("#ingredient").on("click", function(event) {
        //need to preventDefault on the entry
        event.preventDefault();

        //making a new ingredient object
        //old code: $("[name=ingredient]:checked").val().trim()
        var newIngredient = {
            name: $("#ingredient").val().trim()
            
        };

        //Post request
        $.ajax("/api/ingredients", {
            type: "POST",
            data: newIngredient
        }).then(
            function() {
                console.log("recipes.js: Created a new ingredient", newIngredient);
                //reload the page to get the updated list
                location.reload();
            }
        );
        //reset the input value to blank
        // $("#ingredient").val("");
    });


    $(".delete-ingredient").on("click", function(event) {
        var id = $(this).data("id");

        //send the delete request.
        $.ajax("/api/ingredients/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log(" Ingredient removed: ", id);
                //Reload the page to get the updated list
                location.reload();
            }
        );
    });





});
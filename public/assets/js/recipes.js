//Wait to attach the handlers until the DOM is fully loaded
$(document).ready(function() {
    console.log("running the recipe.js function")

    //create a new ingredient (I will probably need to get rid of this, and have typehead.js look through available ingredients)
    $(".create-form").on("submit", function(event) {
        //need to preventDefault on the entry
        event.preventDefault();

        var newIngredient = {
            name: $("ingredient").val().trim(),
            addIngredient: $("[name=ingredient]:checked").val().trim()
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
        $("ingredient").val("");
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
                locaiton.reload();
            }
        );
    });





});
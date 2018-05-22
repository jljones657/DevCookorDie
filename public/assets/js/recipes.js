//Wait to attach the handlers until the DOM is fully loaded
$(document).ready(function() {

    var newIngredient = $("#ingredient");
    var ingredientContainer = $(".ingredient-form");
    var ingredientList = $(".tbody");

    $(document).on("submit", "#ingredient-form", handleIngredientSubmission);
    // $(document).on("click", ".delete-ingredient", handleDeleteButtonPress);

    //Getting a list of Ingredients
    getIngredients();

    //function for adding ingredient to the database
     function insertIngredient(ingredientData) {
        $.post("/recipes", ingredientData).then(getIngredients);
        
    }

    //A Function to handle what happens when I want to add an Ingredient to the database
    function handleIngredientSubmission(event) {
        event.preventDefault();
        
        insertIngredient({
            name: newIngredient.val().trim()
            
        });
        console.log(newIngredient);
    }
    function updateRecipe(data) {
        $.ajax({
            method:"PUT",
            url: "recipes/edit:id",
            data: data
        }).then(function(data){
            console.log(data);
            getData(data);
        })
    }



    // //Function for showing a list of ingredients
    // function createIngredientsRow(ingredientData) {
    //     var newTr = $("<tr>");

    //     newTr.data("ingredient", ingredientData);
    //     newTr.append("<td>" + ingredientData.name + "</td>");
    //     newTr.append("<td><a style='cursor:pointer;color:red' class='delete-ingredient'>Delete Author</a></td>");
        
    //     $("#ingredient-list").prepend(newTr);

    // }

    //Getting Ingredients, and rendering them to the Page
    function getIngredients() {
        $.get("/recipes", function(data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createIngredientRow(data[i]));
            }
            renderIngredientList(rowsToAdd);
            newIngredient.val("");
        });
    }
    
     // A function for rendering the list of authors to the page
    function renderAuthorList(rows) {
        ingredientList.children().not(":last").remove();
        ingredientContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            ingredientList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }
 
    // Function for handling what happens when the delete button is pressed
    // function handleDeleteButtonPress() {
    //     var listItemData = $(this).parent("td").parent("tr").data("author");
    //     var id = listItemData.id;
    //     $.ajax({
    //         method: "DELETE",
    //         url: "/api/ingredients/" + id
    //     })
    //     .then(getIngredients);
    // }




});
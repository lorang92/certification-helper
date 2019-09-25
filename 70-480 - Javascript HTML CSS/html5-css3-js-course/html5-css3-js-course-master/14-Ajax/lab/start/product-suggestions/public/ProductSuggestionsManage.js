// Send an Ajax request to GET a product suggestion.
function getProductSuggestion() {

    // If the user didn't enter an id, return immediately.
    var id = $("#id").val();
    if (id == "")
        return;

    // Clear all the text boxes.
    clearProductSuggestion();

    // Send an Ajax request to GET a product suggestion with the specified id.
    var theUrl = "/productsuggestions/" + id;
    $.ajax({
        type: "GET",
        url: theUrl,
        cache: false,

        accepts: {
            json: 'application/json'
        },

        success: function (data) {
            if (data === null) {
                alert("Could not get item");
            }
            else {
                displayProductSuggestion(data);
            }
        },

        error: function (xhr, message) {
            displayError(xhr, message, $("#id").val());
        }
    });
}


// Send an Ajax request to POST (insert) a product suggestion.
function insertProductSuggestion() {

    // Create a ProductSuggestion object, and set its properties based on user input. 
    var productSuggestion = {
        description: $("#description").val(),
        price: $("#price").val(),
    };

    // TODO: Send an Ajax request to POST the object to the server. Note the following points when you call $.ajax():
    // - Set the contentType property to "application/json", to tell the server you're sending it a JSON string.
    // - Set the data property to JSON.stringify(productSuggestion), to convert your object into a JSON string so it can be sent over HTTP.
    // - Set the cache property to false, to ensure the browser doesn't just use a cached response to your request.
    // - If the call succeeds, it will return the product suggestion object (with its id property now set). Pass the object to displayProductSuggestion().
    var url =  "/productsuggestions";
    var payload = JSON.stringify(productSuggestion);

    $.ajax({
        type: "POST",
        url: url,
        cache: false,
        contentType: 'application/json',
        data: payload,
        success: function(data) {
           displayProductSuggestion(data); 
        },
        error: function(data) {
            alert(data);
        }
    });



}


// Send an Ajax request to PUT (update) a product suggestions.
function updateProductSuggestion() {

    var id = $("#id").val();
    if (id == "")
        return;

    // Create a ProductSuggestion object, and set its properties based on user input. 
    var productSuggestion = {
        id: id,
        description: $("#description").val(),
        price: $("#price").val(),
    };

    var data = JSON.stringify(productSuggestion);
    var url =  "/productsuggestions/" + id;

    $.ajax({
        type: "PUT",
        url: url,
        cache: false,
        contentType: 'application/json',
        data: data,
        success: function(data) {
           displayProductSuggestion(data); 
        },
        error: function(data) {
            alert(data);
        }
    });


}


function deleteProductSuggestion() {

    var id = $("#id").val();
    if (id == "")
        return;

    clearProductSuggestion();

    var url =  "/productsuggestions/" + id;

    $.ajax({
        type: "DELETE",
        url: url,
        cache: false,
        success: function(data) {
            console.log("DELETED");
        },
        error: function(data) {

        }
    })



}


function clearProductSuggestion() {
    $("#id").val("");
    $("#description").val("");
    $("#price").val("");
}


// Helper function, to display a product suggestion object in the text boxes.
function displayProductSuggestion(productSuggestion) {
    $("#id").val(productSuggestion.id);
    $("#description").val(productSuggestion.description);
    $("#price").val(productSuggestion.price);
}


// Helper function, to display an error message.
function displayError(xhr, message, id) {
    if (xhr.status == 404) {
        alert("Item " + id + " not found");
    }
    else if (xhr.status == 410) {
        alert("Item " + id + " does not exist");
    }
    else {
        alert("Ajax error occurred: " + message);
    }
}

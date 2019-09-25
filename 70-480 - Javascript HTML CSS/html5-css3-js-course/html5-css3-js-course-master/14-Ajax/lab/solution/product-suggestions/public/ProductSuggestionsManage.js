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

    // Send an Ajax request to POST the object to the service. 
    var theUrl = "/productsuggestions";
	$.ajax({
		type: "POST",
		url: theUrl,
		cache: false,
		contentType: "application/json",
		data: JSON.stringify(productSuggestion),

		success: function (data) {
			displayProductSuggestion(data);
			alert("Inserted item successfully [id is " + data.id + "]");
		},

		error: function (xhr, message) {
			displayError(xhr, message);
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

    // Send an Ajax request to PUT the object to the service. 
    var theUrl = "/productsuggestions/" + id;
    $.ajax({
        type: "PUT",
        url: theUrl,
        cache: false,
        contentType: "application/json",
        data: JSON.stringify(productSuggestion),

        success: function () { 
            alert("Updated item " + id + " successfully");
        },

        error: function (xhr, message) {
            displayError(xhr, message, id);
        }
    });
}


// Send an Ajax request to DELETE a product suggestion.
function deleteProductSuggestion() {

    // If the user didn't enter an id, return immediately.
    var id = $("#id").val();
    if (id == "")
        return;

    // Clear all the text boxes.
    clearProductSuggestion();

    // Send an Ajax request to DELETE the product suggestion with the specified id.
    var theUrl = "/productsuggestions/" + id;
    $.ajax({
        type: "DELETE",
        url: theUrl,
        cache: false,

        success: function () {
            alert("Deleted item " + id + " successfully");
        },

        error: function (xhr, message) {
            displayError(xhr, message, id);
        }
    });
}


// Helper function, to clear the text boxes.
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

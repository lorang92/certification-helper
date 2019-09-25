// Send a request to GET a product suggestion.
function getProductSuggestion() {

    // If the user didn't enter an id, return immediately.
    const id = document.querySelector('#id').value;
    if (id === '') {
        return;
    }

    // Clear all the text boxes.
    clearProductSuggestion();

    // Send a request to GET a product suggestion with the specified id.
    const theUrl = '/productsuggestions/' + id;

    fetch(theUrl)
    .then(function (response) {
        if (!response.ok) {
            throw Error(`${response.status}: ${response.statusText} [${response.url}]`);
        }
        return response.json();
    })
    .then(function (data) {
        displayProductSuggestion(data);
    })
    .catch(function (error) {
        displayErrorNew(error.message);
    });
}


// Send a request to POST (insert) a product suggestion.
function insertProductSuggestion() {

    // Create a ProductSuggestion object, and set its properties based on user input. 
    const productSuggestion = {
        description: document.querySelector('#description').value,
        price: document.querySelector('#price').value,
    };

    // Send a request to POST the object to the service. 
    const theUrl = '/productsuggestions';

    fetch(theUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productSuggestion)
    })
        .then(function (response) {
            if (!response.ok) {
                throw Error(`${response.status}: ${response.statusText} [${response.url}]`);
            }

            return response.json();
        })
        .then(function (data) {
			displayProductSuggestion(data);
			alert(`Inserted item successfully [id is ${data.id}]`);
        })
        .catch(function (error) {
            displayErrorNew(error.message);
        });
}


// Send a request to PUT (update) a product suggestions.
function updateProductSuggestion() {

    // If the user didn't enter an id, return immediately.
    const id = document.querySelector('#id').value;
    if (id === '') {
        return;
    }

    // Create a ProductSuggestion object, and set its properties based on user input. 
    const productSuggestion = {
        id: id,
        description: document.querySelector('#description').value,
        price: document.querySelector('#price').value,
    };

    // Send a request to PUT the object to the service. 
    const theUrl = '/productsuggestions/' + id;

    fetch(theUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productSuggestion)
    })
        .then(function (response) {
            if (!response.ok) {
                throw Error(`${response.status}: ${response.statusText} [${response.url}]`);
            }

            alert(`Updated item ${id} successfully`);
        })
        .catch(function (error) {
            displayErrorNew(error.message);
        });
}


// Send a request to DELETE a product suggestion.
function deleteProductSuggestion() {

    // If the user didn't enter an id, return immediately.
    const id = document.querySelector('#id').value;
    if (id === '') {
        return;
    }

    // Clear all the text boxes.
    clearProductSuggestion();

    // Send a request to DELETE the product suggestion with the specified id.
    const theUrl = '/productsuggestions/' + id;

    fetch(theUrl, {
        method: 'DELETE'
    })
        .then(function (response) {
            if (!response.ok) {
                throw Error(`${response.status}: ${response.statusText} [${response.url}]`);
            }

            alert(`Deleted item ${id} successfully`);
        })
        .catch(function (error) {
            displayErrorNew(error.message);
        });
}


// Helper function, to clear the text boxes.
function clearProductSuggestion() {
    document.querySelector('#id').value = '';
    document.querySelector('#description').value = '';
    document.querySelector('#price').value = '';
}


// Helper function, to display a product suggestion object in the text boxes.
function displayProductSuggestion(productSuggestion) {
    document.querySelector('#id').value = productSuggestion.id;
    document.querySelector('#description').value = productSuggestion.description;
    document.querySelector('#price').value = productSuggestion.price;
}


// Helper function, to display an error message.
function displayErrorNew(message) {
    alert("Error occurred: " + message);
}

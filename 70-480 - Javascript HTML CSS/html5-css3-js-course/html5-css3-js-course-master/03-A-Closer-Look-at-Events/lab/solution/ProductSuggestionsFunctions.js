var Product = function (description, email, price, sales) {
    this.description = description;
    this.email = email;
    this.price = price;
    this.sales = sales;
    this.ts = new Date();
};

Product.prototype = {

    format: function () {
        var str = this.description.toUpperCase().big().bold().fontcolor("orange") + "<br/>"
                                + "Suggested by " + this.email + "<br/>"
                                + "£" + this.price + " [projected sales " + this.sales + "]<br/>";

        var tsStr = this.ts.getDate() + "/" + (this.ts.getMonth() + 1) + "/" + this.ts.getFullYear() + ", " +
                    pad(this.ts.getHours()) + ":" + pad(this.ts.getMinutes()) + ":" + pad(this.ts.getSeconds());

        str += tsStr.fontcolor("blue");

        return str;
    },

    matchesRegExp: function (re) {
        return re.test(this.description);
    }
};


var allProducts = new Array();

function onLoad() {

    // Enable color coding on all text boxes.
    setColorCoding(true);

    // Set the focus to the first input control on the main form.
    var firstInputField = document.querySelector("#mainForm input");
    firstInputField.focus();
}


function setColorCoding(enabled) {

    // Intercept all focus and blur events anywhere in the body, making use of the "capture" events mechanism.
    var body = document.querySelector("body");

    if (enabled) {
        body.addEventListener("focus", onFocusBlur, true);
        body.addEventListener("blur", onFocusBlur, true);
    } 
    else {
        body.removeEventListener("focus", onFocusBlur, true);
        body.removeEventListener("blur", onFocusBlur, true);
    } 
}


function onFocusBlur(e) {

    // We're only interested in text boxes (i.e. <input type="text"...> controls).
    if (e.target["type"] == "text") {

        // If it's a "focus" event, set the text color to orange. If it's a "blur" event, set the text color to black.
        if (e.type == "focus") {
            e.target.style.color = "orange";
        }
        else if (e.type == "blur") {
            e.target.style.color = "black";
        }
    }
}


function onColorCodingChanged(elem) {

    if (elem.checked) {
        setColorCoding(true);
        alert("Color coding is now enabled.");
    }
    else {
        setColorCoding(false);
        alert("Color coding is now disabled.");
    }
}


function doAdd() {
    
    // Validate the main form, to ensure the user entered a value in all required fields.
    var firstInvalidField = validate("mainForm");
    if (firstInvalidField != null) {
        alert("Complete all required fields");
        firstInvalidField.focus();
    }
    else {
        // Get the product suggestion (text).
        var description = document.getElementById("description").value;

        // Get the user's email address.
        var email = document.getElementById("email").value;

        // Get the recommended retail price (float).
        var priceStr = document.getElementById("price").value;
        var price = parseFloat(priceStr).toFixed(2);

        // Get the estimated sales/year (int).
        var salesStr = document.getElementById("sales").value;
        var sales = parseInt(salesStr);

        // Create a new Product object with the data garnered from the form.
        var product = new Product(description, email, price, sales);

        // Add this Product object to the global array of all products.
        allProducts.push(product);

        // Redisplay all the products.
        displayProducts(allProducts, "allProductsList");
    }

    // Stop the click() event from causing form submission.
    return false;
}


function validate(formName) {

    // This function returns null if all the required text boxes are populated.
    var firstInvalidField = null;

    // Get all the required text boxes in the specified form.
    var requiredFields = document.querySelectorAll("#" + formName + " input[type='text'].required");

    // Loop through the required text boxes, to see if they are populated.
    for (var i = 0; i < requiredFields.length; i++ ) {

        var field = requiredFields[i];

        // If the field is empty...
        if (!field.value) {

            // Highlight it to the user.
            field.style.backgroundColor = "Yellow";

            // Is it the first invalid field on the form?
            if (firstInvalidField == null) {
                firstInvalidField = field;
            }
        }
        else {

            // The field is populated, so make sure any previous highlighting is removed.
            field.style.backgroundColor = "White";
        }
    }
    return firstInvalidField;
}


function displayProducts(products, targetElementName) {

    // Create a string containing an HTML unordered list.
    var str = "<ul>";
    for (var i in products) {
        str += "<li>" + products[i].format() + "</li>";
    }
    str += "</ul>";

    // Write the string to the products list.
    var targetElement = document.getElementById(targetElementName);
    targetElement.innerHTML = str;
}


function doSort() {
    allProducts.sort(function (p1, p2) {
        if (p1.description < p2.description)
            return -1;
        else if (p1.description > p2.description)
            return +1;
        else
            return 0;
    });
    displayProducts(allProducts, "allProductsList");
}



function doReverse() {
    allProducts.reverse();
    displayProducts(allProducts, "allProductsList");
}


function doSearch() {

    // Create a RegExp object, based on the search string entered by the user.
    var searchString = document.getElementById("searchString").value;
    var re = new RegExp(searchString);
    
    // Create an array that contains all the products that match the search string.
    var matchingProducts = new Array();
    for (var i in allProducts) {

        // Get the next product from the global array.
        var curr = allProducts[i];

        // If it matches the search string, add it into the array of matches.
        if (curr.matchesRegExp(re)) {
            matchingProducts.push(curr);
        }
    }

    // Display the array of matching product suggestions.
    displayProducts(matchingProducts, "matchingProductsList");
}

function doShowInNewWindow() {
    // Open a new window.
    window.open("ProductSuggestionsPage.html");
}

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}
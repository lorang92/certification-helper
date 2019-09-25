class Product {
    constructor(description, email, price, sales) {
        this.description = description;
        this.email = email;
        this.price = price;
        this.sales = sales;
        this.ts = new Date();
    }

    format() {
        let str = `${this.description.toUpperCase().big().bold().fontcolor("orange")}<br>
Suggested by ${this.email}<br>
£${this.price} [projected sales ${this.sales}]<br>`;

        const ts = new Date();
        str += ts.toLocaleString("en-UK", { hour12: false }).fontcolor("blue");

        return str;
    }

    matchesRegExp(re) {
        return re.test(this.description);
    }
};


var allProducts = new Array();

function onLoad() {

    // Enable color coding on all text boxes.
    setColorCoding(true);

    // Set the focus to the first input control on the main form.
    const firstInputField = document.querySelector("#mainForm input");
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

        // If it's a "focus" event, set the text color to orange. If it's a "blur" event, set the text color to the original color.
        if (e.type == "focus") {
            e.target.style.setProperty("color", "orange");
        }
        else if (e.type == "blur") {
            e.target.style.removeProperty("color");
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


function doAdd(e) {

    // Prevent the default submit action, which is sending the data to the server and reloading the url.
    e.preventDefault();

    // Get the form from the event.
    const form = e.target;

    // Validate the main form, to ensure the user entered a value in all required fields.
    const firstInvalidField = validate(form);
    if (firstInvalidField != null) {
        alert("Complete all required fields");
        firstInvalidField.focus();
    }
    else {
        // Get the product suggestion (text).
        const description = form.elements["description"].value;

        // Get the user's email address.
        const email = form.elements["email"].value;

        // Get the recommended retail price (float).
        const priceStr = form.elements["price"].value;
        const price = parseFloat(priceStr).toFixed(2);

        // Get the estimated sales/year (int).
        const salesStr = form.elements["sales"].value;
        const sales = parseInt(salesStr);

        // Create a new Product object with the data garnered from the form.
        const product = new Product(description, email, price, sales);

        // Add this Product object to the global array of all products.
        allProducts.push(product);

        // Redisplay all the products.
        displayProducts(allProducts, "allProductsList");
    }
}


function validate(form) {

    // This function returns null if all the required text boxes are populated.
    var firstInvalidField = null;

    // Get all the required text boxes in the specified form.
    const requiredFields = Array.from(form.querySelectorAll("input[type='text'].required"));

    // Loop through the required text boxes, to see if they are populated.
    for (const field of requiredFields) {

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
            field.style.removeProperty("background-color");
        }
    }

    return firstInvalidField;
}


function displayProducts(products, targetElementName) {

    // Create a (template) string containing an HTML unordered list.
    const str = `<ul>${products.map(product => `<li>${product.format()}</li>`).join("")}</ul>`;

    // Write the string to the products list.
    const targetElement = document.getElementById(targetElementName);
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
    const searchString = document.getElementById("searchString").value;
    const re = new RegExp(searchString, "i");

    // Create an array that contains all the products that match the search string.
    const matchingProducts = allProducts.filter(product => product.matchesRegExp(re));

    // Display the array of matching product suggestions.
    displayProducts(matchingProducts, "matchingProductsList");
}


function doShowInNewWindow() {
    // Open a new window.
    window.open("ProductSuggestionsPage.html");
}

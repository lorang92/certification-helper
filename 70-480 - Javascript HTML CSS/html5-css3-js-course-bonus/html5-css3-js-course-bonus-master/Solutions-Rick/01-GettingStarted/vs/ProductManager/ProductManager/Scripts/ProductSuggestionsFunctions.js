// Create an empty array initially, to hold all products.
let allProducts = [];

function doAdd(e) {

    // Prevent the default submit action, which is sending the data to the server and reloading the url.
    e.preventDefault();

    // Get the form from the event.
    const form = e.target;

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

    // Build a formatted (template) string for this product suggestion.
    let product = `${description.toUpperCase().big().bold().fontcolor("orange")}<br>
Suggested by ${email}<br>
£${price} [projected sales ${sales}]<br>`;

    // Append the current date/time to the product string.
    const ts = new Date();
    product += ts.toLocaleString("en-UK", { hour12: false }).fontcolor("blue");

    // Add this product to the global array of all products.
    allProducts.push(product);

    // Redisplay all the products.
    displayProducts(allProducts, "allProductsList");
}


function displayProducts(products, targetElementName) {

    // Create a (template) string containing an HTML unordered list.
    const str = `<ul>${products.map(product => `<li>${product}</li>`).join("")}</ul>`;

    // Write the string to the products list.
    const targetElement = document.getElementById(targetElementName);
    targetElement.innerHTML = str;
}


function doSort() {
    allProducts.sort();
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
    const matchingProducts = allProducts.filter(product => re.test(product));

    // Display the array of matching product suggestions.
    displayProducts(matchingProducts, "matchingProductsList");
}

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


// Create an empty array initially, to hold all products.
let allProducts = new Array();

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

    // Create a new Product object with the data garnered from the form.
    const product = new Product(description, email, price, sales);

    // Add this product to the global array of all products.
    allProducts.push(product);

    // Redisplay all the products.
    displayProducts(allProducts, "allProductsList");
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

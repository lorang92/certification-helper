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

function doAdd() {

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

    // Stop the click() event from causing form submission.
    return false;
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


function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}
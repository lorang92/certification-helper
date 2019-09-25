// Create an empty array initially, to hold all products.
var allProducts = [];

var Product = function(description, email, retail, sales) {
    this.description = description;
    this.email = email;
    this.retail = retail;
    this.sales = sales;
}

Product.prototype = {
    getString: function() {
        var ts = new Date();
        var tsStr = ts.getDate()  + "/" + (ts.getMonth() + 1) + "/" + ts.getFullYear() + ", " +
                    pad(ts.getHours()) + ":" + pad(ts.getMinutes())   + ":" + pad(ts.getSeconds());
        return this.description.toUpperCase().big().bold().fontcolor("orange") + "<br/>" 
        + "Suggested by " + this.email + "<br/>"
        + "£" + this.retail + " [projected sales " + this.sales + "]<br/>" + tsStr + "<br/>";
    }
}

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

    // Build a formatted string for this product suggestion.
    var product = new Product(description, email, price, sales);
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
        str += "<li>" + products[i].getString() + "</li>";
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
    var re = new RegExp(/searchString/i);
    // Create an array that contains all the products that match the search string.
    var matchingProducts = [];
    for (var i in allProducts) {

        // Get the next product from the global array.
        var curr = allProducts[i];

        // If it matches the search string, add it into the array of matches.
        if (re.test(curr.description)) {
            matchingProducts.push(curr);
        }
    }   

    // Display the array of matching product suggestions.
    displayProducts(matchingProducts, "matchingProductsList");
}


function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}
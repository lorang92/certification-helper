function concatWithSpaces(str1, str2) {
    // str1 and str2 are strings.
    // DONE: This function should concat the strings seperated with a space and return the result.
    return str1 + ' ' + str2;
}

function sum(numberArray) {
    // numberArray is an array of only numbers.
    // DONE: This function should sum all the numbers in the array and return the result.
    var result = 0;
    for (let index = 0; index < numberArray.length; index++) {
        result += numberArray[index];
    }
    return result;
}

var myNamespace = myNamespace || {};

//myNamespace.deeperNamespace = myNamespace.deeperNamespace || {};

(function() {
    function aNumber() {
        return 1;
    }

    myNamespace.first = aNumber();
    //myNamespace.aNumber = aNumber;
})();
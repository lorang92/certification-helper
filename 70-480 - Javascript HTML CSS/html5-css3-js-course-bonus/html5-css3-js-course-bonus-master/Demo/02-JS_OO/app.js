// Base

var Base = function(value) {
    this.prop1 = value;
}
Base.prototype = {
    func1: function (value) { 
        this.prop1 += value; 
    }
};

// Derived

var Ext = function() {
    Base.call(this, 10);
    this.prop2 = "two";
}
Ext.prototype = new Base();
Ext.prototype.constructor = Ext;

Ext.prototype.func2 = function(value) {
    this.prop2 += value;
}


var b = new Base(1);
b.func1(2);

document.writeln(b.prop1);
document.writeln();


var c = new Ext();
c.func1(1);
c.func2("...");

document.writeln(c.prop1);
document.writeln(c.prop2);

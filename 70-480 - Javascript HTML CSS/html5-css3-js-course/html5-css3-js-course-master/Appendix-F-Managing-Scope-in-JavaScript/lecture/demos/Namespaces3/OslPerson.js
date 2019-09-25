osl.createNamespace("osl.mydomain");

osl.mydomain.Person = function (givenName, familyName, age) {
	this.givenName = givenName;
	this.familyName = familyName;
	this.age = age;
};

osl.mydomain.Person.prototype = {
	
	compareTo: function(otherPerson) {
		if (!otherPerson || !otherPerson.age)
			throw new Error("Invalid person");
		return this.age - otherPerson.age;
	}, 

	toString: function() {
		return this.familyName + ", " + this.givenName + " [" + this.age + "]";
	}
};

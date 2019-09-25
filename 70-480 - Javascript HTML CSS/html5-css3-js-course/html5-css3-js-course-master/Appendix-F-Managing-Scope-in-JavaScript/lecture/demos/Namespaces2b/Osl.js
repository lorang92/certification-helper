var osl = (function() {

	// ---------------------------------------------------------------
	// Define Person object.
	// ---------------------------------------------------------------
	var Person = function (givenName, familyName, age) {
		this.givenName = givenName;
		this.familyName = familyName;
		this.age = age;
	};

	Person.prototype = {
	
		compareTo: function(otherPerson) {
			if (!otherPerson || !otherPerson.age)
				throw new Error("Invalid person");
			return this.age - otherPerson.age;
		}, 

		toString: function() {
			return this.familyName + ", " + this.givenName + " [" + this.age + "]";
		}
	};

	// ---------------------------------------------------------------
	// Define Account object.
	// ---------------------------------------------------------------
	var Account = function (balance) {
		this.balance = balance;
	};

	Account.prototype = {
	
		deposit: function(amount) {
			return this.balance += amount;
		}, 

		withdraw: function(amount) {
			return this.balance -= amount;
		}, 
	};

	// Return an object from this function.
	// The object has properties that expose the object types in this namespace.
	return {
		Person: Person,
		Account: Account
	};
})();
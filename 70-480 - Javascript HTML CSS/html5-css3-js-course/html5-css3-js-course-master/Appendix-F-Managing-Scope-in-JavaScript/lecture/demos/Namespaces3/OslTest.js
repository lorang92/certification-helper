runTests("Person tests", "resultArea", {

	"setup": function() {

		// Using fully qualified names...
		//     this.tom = new osl.mydomain.Person("Tom", "Smith",  29);
		//     this.acc = new osl.mydomain.Account(1000);

		// Using an alias for the namespace...
		var ns = osl.mydomain;
		this.tom = new ns.Person("Tom", "Smith",  29);
		this.acc = new ns.Account(1000);
	},
	
	"test Person toString() returns correct format": function () {
		assertEquals("Smith, Tom [29]", this.tom.toString());
	},

	"test Account deposit() returns correct amount": function () {
		assertEquals(1200, this.acc.deposit(200));
	},

	"test Account withdraw() returns correct amount": function () {
		assertEquals(700, this.acc.withdraw(300));
	},
});

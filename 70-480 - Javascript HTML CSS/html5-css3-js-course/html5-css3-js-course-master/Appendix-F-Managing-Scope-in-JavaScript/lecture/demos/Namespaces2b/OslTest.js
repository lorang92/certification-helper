runTests("Object tests", "resultArea", {

	"setup": function() {
		this.tom = new osl.Person("Tom", "Smith",  29);
		this.acc = new osl.Account(1000);
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

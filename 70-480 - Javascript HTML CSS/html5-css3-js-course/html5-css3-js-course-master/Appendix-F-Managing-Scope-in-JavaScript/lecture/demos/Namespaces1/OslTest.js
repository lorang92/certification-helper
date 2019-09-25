runTests("Simple namespace tests", "resultArea", {

	"test global scope is not polluted": function () {
		assertEquals(window.alertMessage, undefined);
		assertEquals(window.logMessage, undefined);
	},
	
	"test namespace scope contains functions": function () {
		assertEquals(typeof osl.alertMessage, "function");
		assertEquals(typeof osl.logMessage, "function");
	},
	
	"test function in namespace is called ok": function () {
		osl.alertMessage("Hello world");
		osl.logMessage("I just said hello world to the user");
	}
});

osl.createNamespace("osl.mydomain");

osl.mydomain.Account = function (balance) {
	this.balance = balance;
};

osl.mydomain.Account.prototype = {
	
	deposit: function(amount) {
		return this.balance += amount;
	}, 

	withdraw: function(amount) {
		return this.balance -= amount;
	} 
};

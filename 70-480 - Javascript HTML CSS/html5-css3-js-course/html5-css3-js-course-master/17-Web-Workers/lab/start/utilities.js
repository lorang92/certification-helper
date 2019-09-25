addEventListener("message", myMessageListener, true );

function myMessageListener(message){
	console.log("[WORKER] Recived Message: " + message);
	var primes = [];
	for(var i = 0; i < message.data; i++) {
		if(isPrimeNumber(i)) {
			primes.push(i);
		}
	}
	console.log("[WORKER] Primes:" + primes.length);
	postMessage(primes);
};

function isPrimeNumber(num) {

	for (var i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;	
		}
	}
	return true;
};

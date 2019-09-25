'use strict';

import 'babel-polyfill';
import expect from 'expect';

let solved = 0;
let solvedBonus = 0;
const toSolve = 21;
const toSolveBonus = 3;

/* 

This file contains the Solutions. For the excercises, go to the Start folder.js

See "Lab - ES201X and Babel.pdf" for all istructions.

*/

/// const ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

(function UseConst() {
	// 1. Observe in the console that Babel cannot transpile this function.
	// 2. Therefor remove const to make the ES5 transpiler succeed.
	var x = 1;
	
	x = 2;

	// Don't make changes below this line	
	
	expect(x).toBe(2);
	
	solved++;
})();

/// let ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

(function UseLet() {
	var x = 1;
	if (true) {
		// Use let to make the function succeed.
		let x = 2;
	}

	// Don't make changes below this line	
	
	expect(x).toBe(1);
	
	solved++;
})();

/// class ///
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes

(function UseClass1() {
	// Let Multiplier be a class with the appropriate methods to succeed.
	class Multiplier {
		constructor (val1) {
			this.val1 = val1;
		}
		
		multiply (val2) {
			return this.val1 * val2;
		}
	}

	// Don't make changes below this line	
	
	let m = new Multiplier(2);
	
	expect(m.multiply(3)).toBe(6);
	
	solved++;
})();

/// arrow functions ///
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions

(function UseArrow1() {
	// Rewrite double as arrow function and make the test pass.
	var double = x => 2 * x;

	// Don't make changes below this line	
	
	expect(double(3)).toBe(6);
	
	solved++;
})();

(function UseArrow2() {
	// Correct the errors in the arrow function.
	var add = (x, y) => x + y;

	// Don't make changes below this line	
	
	expect(add(3, 5)).toBe(8);
	
	solved++;
})();

(function UseArrow3() {
	// Rewrite all functions as arrow functions. Use as minimal syntax as possible.
	var one = () => 1;
	var two = x => x + x;
	var three = (x, y) => x + y;
    var four = (x, y) => {
		let result = 0;
		for (let i = x; i < y; i++)
			result += i;
		return result;
		};

	// Don't make changes below this line	
	
	expect(one()).toBe(1);
	expect(two(1)).toBe(2);
	expect(three(1,2)).toBe(3);
	expect(four(3, 6)).toBe(12);
	
	solved++;
})();

/// functions default parameters ///
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters

(function UseDefaultParameters() {
	// Correct the syntax errors in the arrow function.
	var hello = (who = "World") => "Hello " + who + "!";

	// Don't make changes below this line	
	
	expect(hello()).toBe("Hello World!");
	
	solved++;
})();

/// Spread operator ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator

(function UseSpreadOperator1() {
	var add = (a, b, c) => a + b + c;
	
	var values = [1, 3, 6];
	
	// Use spread operator to let the test pass.
	var result = add(...values);

	// Don't make changes below this line	
	
	expect(result).toBe(10);
	
	solved++;
})();

(function UseSpreadOperator2() {
	let arr1 = [1, 2, 3];
	let value = 4;
	let arr2 = [5, 6];
	
	// Change after = to let the test pass. DO NOT use concat or loops, but use the spread operator.
	let result = [...arr1, value, ...arr2];

	// Don't make changes below this line	
	
	expect(result).toEqual([1, 2, 3, 4, 5, 6]);
	
	solved++;
})();

/// Template strings ///
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

(function UseTemplateStrings1() {
	const who = "World";
	const addOne = x => x + 1;
	
	// Rewrite the line below to use template literals.
	const greeting = `Hello ${who}! ${addOne(2)} times.`;

	// Don't make changes below this line	
	
	expect(greeting).toBe("Hello World! 3 times.");
	
	solved++;
})();

(function UseTemplateStrings2() {
	// Rewrite the line below to use a template string.
	const text = `line 1
line 2`;

	// Don't make changes below this line	
	
	expect(text).toBe("line 1\nline 2");
	
	solved++;
})();

/// Rest parameter ///
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters

(function UseRestParameter() {
	// Add just one rest parameter and use the number of elements in this parameter 
	// (What is the name of that method?) in the return statement to let the test pass.
	function foo(a, b, ...c) {
		return a + b + c.length;
	}

	// Don't make changes below this line	
	
	expect(foo(1, 2, "test", true, 456)).toBe(6);
	
	solved++;
})();

/// Property shorthand ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

(function UsePropertyShorthand() {
	const name = 'Oslo';
	const age = 985;
	const norwegian = true;
	
	// Remove all unnecesary syntax to let the test pass.
	let city = {
		name,
		age,
		dutch: !norwegian
	};

	// Don't make changes below this line	
	
	expect(city).toEqual({name: 'Oslo', age: 985, dutch: false});
	
	solved++;
})();

/// Method definitions ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions

(function UseMethodDefinitions() {
	// Use method properties to remove unnecessary syntax. DO NOT use arrow functions.
	let obj = {
		add(a, b) { return a + b; },
		subtract(a, b) { return a - b; }
	}

	// Don't make changes below this line	
	
	expect(obj.add(5, 2)).toBe(7);
	expect(obj.subtract(5, 2)).toBe(3);
	
	solved++;
})();

/// Object.assign ///
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

(function UseObjectAssign1() {
	let obj = { val: 1 };
	
	// Use Object.assign to let the tests succeed.
	let copy = Object.assign({}, obj);

	// Don't make changes below this line	
	
	expect(copy.val).toBe(1);
	
	copy.val = 2;
	expect(obj.val).toBe(1);

	solved++;
})();

(function UseObjectAssign2() {
	let obj1 = { a: 100, b: 2, c: 300 };
	let obj2 = { b: 0, d: 100, e: 200};
	let obj3 = { b: 3, c: 4, d: 5 };
	
	// Change Object.assign to let the tests succeed.
	let result = Object.assign(obj1, obj3, obj2);

	// Don't make changes below this line	
	
	expect(result.a).toBe(100);
	expect(result.b).toBe(0);
	expect(result.c).toBe(4);
	expect(result.d).toBe(100);
	expect(result.e).toBe(200);

	solved++;
})();

/// Destructuring ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

(function UseArrayDestructuring1() {
	const arr = [1, 2, 3, 4, 5, 6];
	
	// Use array destructuring to change the 3 statements below into 1 statement.
	// Tip: Spread operator might be needed too.
	let [a, , b, ...c] = arr;
	
	// Don't make changes below this line	
	
	expect(a).toEqual(1);
	expect(b).toEqual(3);
	expect(c).toEqual([4, 5, 6]);
	
	solved++;
})();

(function UseArrayDestructuring2() {
	let a = 1;
	let b = 2;
	
	// Use array destructuring to change the 3 statements below into 1 statement.
	// You should not need a temporary variable anymore.
	[a, b] = [b, a]; 

	// Don't make changes below this line	
	
	expect(a).toEqual(2);
	expect(b).toEqual(1);
	
	solved++;
})();

(function UseObjectDestructuring1() {
	let obj = {
		name: 'Oslo',
		age: 985,
		add: (x, y) => x + y
	}
	
	// Use object destructuring to change the 3 statements below into 1 statement.
	let {name, age, add} = obj;

	// Don't make changes below this line	
	
	expect(name).toBe('Oslo');
	expect(age).toBe(985);
	expect(add(1, 2)).toBe(3);
	
	solved++;
})();

(function UseObjectDestructuring2() {
	let obj = {
		name: 'Oslo',
		age: 985,
		add: (x, y) => x + y
	}
	
	// Use object destructuring to change the 3 statements below into 1 statement.
	let {name: a, age: b, add: c} = obj;

	// Don't make changes below this line	
	
	expect(a).toBe('Oslo');
	expect(b).toBe(985);
	expect(c(1, 2)).toBe(3);
	
	solved++;
})();

(function UseParameterDestructuring() {
	// Adjust the code to let the test succeed.

	let a = ['Oslo', 985];
	let b = {name: 'Oslo', age: 985};

	// Don't make changes below this line	
	
	function f([name, age]) {
		expect(name).toBe('Oslo');
		expect(age).toBe(985);
	}
	
	function g({name, age}) {
		expect(name).toBe('Oslo');
		expect(age).toBe(985);
	}

	f(a);
	g(b);
		
	solved++;
})();

(function UseFailSoftDestructuring() {
	let arr = [1, 2];
	
	// change the line below to let the tests succeed.
	let [a, b, c = 3, d] = arr;

	// Don't make changes below this line	
	
	expect(a).toBe(1);
	expect(b).toBe(2);
	expect(c).toBe(3);
	expect(d).toBe(undefined);

	solvedBonus++;
})();

(function UseNestedDestructuring() {
	let obj = {
		add: (x, y) => x + y,
		city: { name: 'Oslo', age: 985 },
		arr: [1, 2, 3]
		};
	
	// Use destructuring to change the 3 statements below into 1 statement.
	var { add: a, city: { name: b}, arr: [, ...c] } = obj;

	// Don't make changes below this line	
	
	expect(a(1, 2)).toBe(3);
	expect(b).toBe('Oslo');
	expect(c).toEqual([2, 3]);
	
	solvedBonus++;
})();

/// Iterable ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

(function UseGeneratorFunction() {
	// Rewrite the function below to be a generator function ("function*" and "yield").
	function* range(start, end) {
		while (start < end) {
			yield start;
			start++;
		}
	}

	// Don't make changes below this line	

	let result = [];
	for (let i of range(2, 7)) {
		result.push(i);
	}
	
	expect(result).toEqual([2, 3, 4, 5, 6]);

	solvedBonus++;
})();

if (solved === toSolve) {
	console.log('All tests pass!');
	if (solvedBonus === toSolveBonus) {
		console.log('All bonus tests pass!');
	} else {
		console.warn('Any time left? ' + (toSolveBonus - solvedBonus) + ' bonus tests left to solve.');
	}
}
else {
	console.warn((toSolve - solved) + ' tests left to solve.');
}
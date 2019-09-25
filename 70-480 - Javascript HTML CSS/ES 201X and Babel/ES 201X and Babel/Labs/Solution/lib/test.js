'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var solved = 0;
var solvedBonus = 0;
var toSolve = 21;
var toSolveBonus = 3;

///////// Instructions /////////
/* 

This file contains the solutions. For the excercises, go to test-src.js

*/

/// const ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

(function UseConst() {
	// 1. Observe in the console that Babel cannot transpile this function.
	// 2. Therefor remove const to make the ES5 transpiler succeed.
	var x = 1;

	x = 2;

	// Don't make changes below this line	

	(0, _expect2.default)(x).toBe(2);

	solved++;
})();

/// let ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

(function UseLet() {
	var x = 1;
	if (true) {
		// Use let to make the function succeed.
		var _x = 2;
	}

	// Don't make changes below this line	

	(0, _expect2.default)(x).toBe(1);

	solved++;
})();

/// class ///
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes

(function UseClass1() {
	// Let Multiplier be a class with the appropriate methods to succeed.
	var Multiplier = function () {
		function Multiplier(val1) {
			_classCallCheck(this, Multiplier);

			this.val1 = val1;
		}

		_createClass(Multiplier, [{
			key: 'multiply',
			value: function multiply(val2) {
				return this.val1 * val2;
			}
		}]);

		return Multiplier;
	}();

	// Don't make changes below this line	

	var m = new Multiplier(2);

	(0, _expect2.default)(m.multiply(3)).toBe(6);

	solved++;
})();

/// arrow functions ///
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions

(function UseArrow1() {
	// Rewrite double as arrow function and make the test pass.
	var double = function double(x) {
		return 2 * x;
	};

	// Don't make changes below this line	

	(0, _expect2.default)(double(3)).toBe(6);

	solved++;
})();

(function UseArrow2() {
	// Correct the errors in the arrow function.
	var add = function add(x, y) {
		return x + y;
	};

	// Don't make changes below this line	

	(0, _expect2.default)(add(3, 5)).toBe(8);

	solved++;
})();

(function UseArrow3() {
	// Rewrite all functions as arrow functions. Use as minimal syntax as possible.
	var one = function one() {
		return 1;
	};
	var two = function two(x) {
		return x + x;
	};
	var three = function three(x, y) {
		return x + y;
	};
	var four = function four(x, y) {
		var result = 0;
		for (var i = x; i < y; i++) {
			result += i;
		}return result;
	};

	// Don't make changes below this line	

	(0, _expect2.default)(one()).toBe(1);
	(0, _expect2.default)(two(1)).toBe(2);
	(0, _expect2.default)(three(1, 2)).toBe(3);
	(0, _expect2.default)(four(3, 6)).toBe(12);

	solved++;
})();

/// functions default parameters ///
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters

(function UseDefaultParameters() {
	// Correct the syntax errors in the arrow function.
	var hello = function hello() {
		var who = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "World";
		return "Hello " + who + "!";
	};

	// Don't make changes below this line	

	(0, _expect2.default)(hello()).toBe("Hello World!");

	solved++;
})();

/// Spread operator ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator

(function UseSpreadOperator1() {
	var add = function add(a, b, c) {
		return a + b + c;
	};

	var values = [1, 3, 6];

	// Use spread operator to let the test pass.
	var result = add.apply(undefined, values);

	// Don't make changes below this line	

	(0, _expect2.default)(result).toBe(10);

	solved++;
})();

(function UseSpreadOperator2() {
	var arr1 = [1, 2, 3];
	var value = 4;
	var arr2 = [5, 6];

	// Change after = to let the test pass. DO NOT use concat or loops, but use the spread operator.
	var result = [].concat(arr1, [value], arr2);

	// Don't make changes below this line	

	(0, _expect2.default)(result).toEqual([1, 2, 3, 4, 5, 6]);

	solved++;
})();

/// Template strings ///
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

(function UseTemplateStrings1() {
	var who = "World";
	var addOne = function addOne(x) {
		return x + 1;
	};

	// Rewrite the line below to use template literals.
	var greeting = 'Hello ' + who + '! ' + addOne(2) + ' times.';

	// Don't make changes below this line	

	(0, _expect2.default)(greeting).toBe("Hello World! 3 times.");

	solved++;
})();

(function UseTemplateStrings2() {
	// Rewrite the line below to use a template string.
	var text = 'line 1\nline 2';

	// Don't make changes below this line	

	(0, _expect2.default)(text).toBe("line 1\nline 2");

	solved++;
})();

/// Rest parameter ///
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters

(function UseRestParameter() {
	// Add just one rest parameter and use it in the return statement 
	// to let the test pass.
	function foo(a, b) {
		return a + b + (arguments.length <= 2 ? 0 : arguments.length - 2);
	}

	// Don't make changes below this line	

	(0, _expect2.default)(foo(1, 2, "test", true, 456)).toBe(6);

	solved++;
})();

/// Property shorthand ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

(function UsePropertyShorthand() {
	var name = 'Oslo';
	var age = 985;
	var norwegian = true;

	// Remove all unnecesary syntax to let the test pass.
	var city = {
		name: name,
		age: age,
		dutch: !norwegian
	};

	// Don't make changes below this line	

	(0, _expect2.default)(city).toEqual({ name: 'Oslo', age: 985, dutch: false });

	solved++;
})();

/// Method definitions ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions

(function UseMethodDefinitions() {
	// Use method properties to remove unnecessary syntax. DO NOT use arrow functions.
	var obj = {
		add: function add(a, b) {
			return a + b;
		},
		subtract: function subtract(a, b) {
			return a - b;
		}
	};

	// Don't make changes below this line	

	(0, _expect2.default)(obj.add(5, 2)).toBe(7);
	(0, _expect2.default)(obj.subtract(5, 2)).toBe(3);

	solved++;
})();

/// Object.assign ///
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

(function UseObjectAssign1() {
	var obj = { val: 1 };

	// Use Object.assign to let the tests succeed.
	var copy = Object.assign({}, obj);

	// Don't make changes below this line	

	(0, _expect2.default)(copy.val).toBe(1);

	copy.val = 2;
	(0, _expect2.default)(obj.val).toBe(1);

	solved++;
})();

(function UseObjectAssign2() {
	var obj1 = { a: 100, b: 2, c: 300 };
	var obj2 = { b: 0, d: 100, e: 200 };
	var obj3 = { b: 3, c: 4, d: 5 };

	// Change Object.assign to let the tests succeed.
	var result = Object.assign(obj1, obj3, obj2);

	// Don't make changes below this line	

	(0, _expect2.default)(result.a).toBe(100);
	(0, _expect2.default)(result.b).toBe(0);
	(0, _expect2.default)(result.c).toBe(4);
	(0, _expect2.default)(result.d).toBe(100);
	(0, _expect2.default)(result.e).toBe(200);

	solved++;
})();

/// Destructuring ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

(function UseArrayDestructuring1() {
	var arr = [1, 2, 3, 4, 5, 6];

	// Use array destructuring to change the 3 statements below into 1 statement.
	// Tip: Spread operator might be needed too.
	var a = arr[0],
	    b = arr[2],
	    c = arr.slice(3);

	// Don't make changes below this line	

	(0, _expect2.default)(a).toEqual(1);
	(0, _expect2.default)(b).toEqual(3);
	(0, _expect2.default)(c).toEqual([4, 5, 6]);

	solved++;
})();

(function UseArrayDestructuring2() {
	var a = 1;
	var b = 2;

	// Use array destructuring to change the 3 statements below into 1 statement.
	// You should not need a temporary variable anymore.


	// Don't make changes below this line	

	var _ref = [b, a];
	a = _ref[0];
	b = _ref[1];
	(0, _expect2.default)(a).toEqual(2);
	(0, _expect2.default)(b).toEqual(1);

	solved++;
})();

(function UseObjectDestructuring1() {
	var obj = {
		name: 'Oslo',
		age: 985,
		add: function add(x, y) {
			return x + y;
		}

		// Use object destructuring to change the 3 statements below into 1 statement.
	};var name = obj.name,
	    age = obj.age,
	    add = obj.add;

	// Don't make changes below this line	

	(0, _expect2.default)(name).toBe('Oslo');
	(0, _expect2.default)(age).toBe(985);
	(0, _expect2.default)(add(1, 2)).toBe(3);

	solved++;
})();

(function UseObjectDestructuring2() {
	var obj = {
		name: 'Oslo',
		age: 985,
		add: function add(x, y) {
			return x + y;
		}

		// Use object destructuring to change the 3 statements below into 1 statement.
	};var a = obj.name,
	    b = obj.age,
	    c = obj.add;

	// Don't make changes below this line	

	(0, _expect2.default)(a).toBe('Oslo');
	(0, _expect2.default)(b).toBe(985);
	(0, _expect2.default)(c(1, 2)).toBe(3);

	solved++;
})();

(function UseParameterDestructuring() {
	// Adjust the code to let the test succeed.

	var a = ['Oslo', 985];
	var b = { name: 'Oslo', age: 985 };

	// Don't make changes below this line	

	function f(_ref2) {
		var _ref3 = _slicedToArray(_ref2, 2),
		    name = _ref3[0],
		    age = _ref3[1];

		(0, _expect2.default)(name).toBe('Oslo');
		(0, _expect2.default)(age).toBe(985);
	}

	function g(_ref4) {
		var name = _ref4.name,
		    age = _ref4.age;

		(0, _expect2.default)(name).toBe('Oslo');
		(0, _expect2.default)(age).toBe(985);
	}

	f(a);
	g(b);

	solved++;
})();

(function UseFailSoftDestructuring() {
	var arr = [1, 2];

	// change the line below to let the tests succeed.
	var a = arr[0],
	    b = arr[1],
	    _arr$ = arr[2],
	    c = _arr$ === undefined ? 3 : _arr$,
	    d = arr[3];

	// Don't make changes below this line	

	(0, _expect2.default)(a).toBe(1);
	(0, _expect2.default)(b).toBe(2);
	(0, _expect2.default)(c).toBe(3);
	(0, _expect2.default)(d).toBe(undefined);

	solvedBonus++;
})();

(function UseNestedDestructuring() {
	var obj = {
		add: function add(x, y) {
			return x + y;
		},
		city: { name: 'Oslo', age: 985 },
		arr: [1, 2, 3]
	};

	// Use destructuring to change the 3 statements below into 1 statement.

	var a = obj.add,
	    b = obj.city.name,
	    _obj$arr = _toArray(obj.arr),
	    c = _obj$arr.slice(1);

	// Don't make changes below this line	

	(0, _expect2.default)(a(1, 2)).toBe(3);
	(0, _expect2.default)(b).toBe('Oslo');
	(0, _expect2.default)(c).toEqual([2, 3]);

	solvedBonus++;
})();

/// Iterable ///
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

(function UseGeneratorFunction() {
	var _marked = /*#__PURE__*/regeneratorRuntime.mark(range);

	// Rewrite the function below to be a generator function ("function*" and "yield").
	function range(start, end) {
		return regeneratorRuntime.wrap(function range$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if (!(start < end)) {
							_context.next = 6;
							break;
						}

						_context.next = 3;
						return start;

					case 3:
						start++;
						_context.next = 0;
						break;

					case 6:
					case 'end':
						return _context.stop();
				}
			}
		}, _marked, this);
	}

	// Don't make changes below this line	

	var result = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = range(2, 7)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var i = _step.value;

			result.push(i);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	(0, _expect2.default)(result).toEqual([2, 3, 4, 5, 6]);

	solvedBonus++;
})();

if (solved === toSolve) {
	console.log('All tests pass!');
	if (solvedBonus === toSolveBonus) {
		console.log('All bonus tests pass!');
	} else {
		console.warn('Any time left? ' + (toSolveBonus - solvedBonus) + ' bonus tests left to solve.');
	}
} else {
	console.warn(toSolve - solved + ' tests left to solve.');
}

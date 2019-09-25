'use strict';

exports.multiply = function (a, b) {
  return a * b;
}

exports.divide = function (a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }

  return a / b;
}

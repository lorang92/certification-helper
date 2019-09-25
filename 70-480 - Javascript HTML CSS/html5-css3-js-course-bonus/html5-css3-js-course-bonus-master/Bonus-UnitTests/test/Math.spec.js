var Math = require('../src/Math.js');

var expect = require('expect');

describe('multiply', () => {
  it('should multiply two numbers', () => {
    var expected = 6;
    
    var actual = Math.multiply(2, 3);
    
    expect(actual).toEqual(expected);
  });
});

describe('divide', () => {
  it('should divide two numbers', () => {
    var expected = 2;
    
    var actual = Math.divide(6, 3);
    
    expect(actual).toEqual(expected);
  });

  it('should throw error when dividing by zero', () => {
    var action = function() { Math.divide(6, 0); };

    expect(action).toThrow(/Division by zero/);
  });
});

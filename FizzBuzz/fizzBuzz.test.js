const { checkNumber } = require('./fizzBuzz');

test('3 should return "Fizz"', () => {
    expect(checkNumber(3)).toBe('Fizz');
});

test('5 should return "Buzz"', () => {
    expect(checkNumber(5)).toBe('Buzz');
});

test('15 should return "FizzBuzz"', () => {
    expect(checkNumber(15)).toBe('FizzBuzz');
});

test('1 should return 1', () => {
    expect(checkNumber(1)).toBe(1);
});
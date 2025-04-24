const { checkNumber } = require('./fizzBuzz2');

test('53 should return "FizzBuzz"', () => {
    expect(checkNumber(53)).toBe('FizzBuzz');
});

test('5 should return "FizzBuzzBuzz"', () => {
    expect(checkNumber(35)).toBe('FizzBuzzBuzz');
});

test('51 should return "FizzBuzz"', () => {
    expect(checkNumber(51)).toBe('FizzBuzz');
});

test('33 should return "FizzFizz"', () => {
    expect(checkNumber(33)).toBe('FizzFizz');
});

test('1 should return 1', () => {
    expect(checkNumber(1)).toBe(1);
});
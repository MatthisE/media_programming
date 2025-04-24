const { checkNumber } = require('./fizzBuzz3');



test('7 should return "Fuzz"', () => {
    expect(checkNumber(7)).toBe("Fuzz");
});

test('61 should return "Fuzz"', () => {
    expect(checkNumber(61)).toBe("Fuzz");
});

test('25 should return "BuzzBuzzFuzz"', () => {
    expect(checkNumber(25)).toBe("BuzzBuzzFuzz");
});

test('34 should return "FizzFuzz"', () => {
    expect(checkNumber(34)).toBe("FizzFuzz");
});

test('1 should return 1', () => {
    expect(checkNumber(1)).toBe(1);
});
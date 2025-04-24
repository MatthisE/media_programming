const checkNumber = (num) => {
    let result = num;

    if (num % 3 === 0 && num % 5 === 0) result = 'FizzBuzz';
    else if (num % 3 === 0) result = 'Fizz';
    else if (num % 5 === 0) result = 'Buzz';

    return result;
};

if (process.env.NODE_ENV !== 'test') {
    for (let i = 1; i <= 100; i++) {
        console.log(checkNumber(i));
    }
}

module.exports = { checkNumber };
const digitSum = (num) => {
    return String(num)
      .split('')               // ['1', '2', '3']
      .map(Number)             // [1, 2, 3]
      .reduce((sum, digit) => sum + digit, 0);  // 6
  };

const checkNumber = (num) => {
    let result = '';

    if (num % 3 === 0) result += 'Fizz';
    if (String(num).includes('3')) result += 'Fizz';
    if (num % 5 === 0) result += 'Buzz';
    if (String(num).includes('5')) result += 'Buzz';

    if (digitSum(num) === 7) result += 'Fuzz';

    if(result !== ''){
        return result;
    }else{
        return num;
    }
};

if (process.env.NODE_ENV !== 'test') {
    for (let i = 1; i <= 100; i++) {
        console.log(checkNumber(i));
    }
}

module.exports = { checkNumber };
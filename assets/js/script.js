function calculateFactorial(num) {
    let result;
    if (isNaN(num) || num < 0) {
        return NaN;
    };
    if (!isNaN(num)) {
        if (num === 0 || num === 1) {
            result = 1;
        }
        else {
            result = num * calculateFactorial(num - 1);
        };
    };
    return result;
};

// console.log(calculateFactorial(2));
// console.log(calculateFactorial(1));
// console.log(calculateFactorial(0));
// console.log(calculateFactorial('sdfsfsdf'));
// console.log(calculateFactorial(-120102));
// console.log(calculateFactorial(20));
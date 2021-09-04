'use strict';

const rangeOdd = (num1, num2) => {
    const result = []
    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            result.push(i)
        }
    }
    return result
};

module.exports = { rangeOdd };

'use strict';

const square = (n) => n*n

const cube = (n) => n*n*n

const average = (num1, num2) => {
    return (num1 + num2)/2
};

const calculate = () => {
    const result = []
    for (let i = 0; i <= 9; i++) {
        const calcNum = average(square(i), cube(i)) 
        result[i] = calcNum
    }
    return result
};

module.exports = { square, cube, average, calculate };

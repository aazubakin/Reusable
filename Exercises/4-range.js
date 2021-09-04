'use strict';

const range = (num1, num2) => {
    const arr = []
    for (let i = num1; i <= num2; i++) {
       arr.push(i) 
    }
    return arr
};

module.exports = { range };

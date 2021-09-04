'use strict';

const fn = () => {
    const obj1 = { name: 'alex' }
    let obj2 = { name: 'fred' }
    obj1.name = 'jhon'
    obj2.name = 'rob'
    const obj = { name: 'ford' }
    obj2 = obj
};

module.exports = { fn };

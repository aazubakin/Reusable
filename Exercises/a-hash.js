'use strict';

const phonebook = {
    Marcus: '+380445554433',
    Alex: '+380995554433',
    Timur: '+7999888112',
}

const findPhoneByName = (name) => phonebook[name]

module.exports = { phonebook, findPhoneByName };

'use strict';

const phonebook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Alex Brejnev', phone: '+380995554433' },
    { name: 'Timur Aurelius', phone: '+7999888112' },
]

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone
  }
};

module.exports = { phonebook, findPhoneByName };

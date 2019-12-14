/* eslint-disable no-console */
const { data: data1 } = require('./data/day1.json');
const { fuelCounterUpper, fuelCounterUpperWithFuel } = require('./day1');

console.log('⭐ Advent of Code 2019 ⭐');
console.group('Day One ⛽');
console.log('Fuel Counter-Upper:', fuelCounterUpper(data1));
console.log('Fuel Counter-Upper(w/fuel):', fuelCounterUpperWithFuel(data1));

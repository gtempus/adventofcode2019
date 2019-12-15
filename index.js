/* eslint-disable no-console */
const { data: data1 } = require('./data/day1.json');
const { fuelCounterUpper, fuelCounterUpperWithFuel } = require('./day1');
const { data: data2 } = require('./data/day2.json');
const { shipsComputer, shipsComputerParamFinder } = require('./day2');

console.log('⭐ Advent of Code 2019 ⭐');
console.group('Day One ⛽');
console.log('Fuel Counter-Upper:', fuelCounterUpper(data1));
console.log('Fuel Counter-Upper(w/fuel):', fuelCounterUpperWithFuel(data1));
console.groupEnd();
console.group('Day Two');
console.log('Error Code:', shipsComputer(data2)[0]);
console.log('Gravity Assist:', shipsComputerParamFinder(data2));

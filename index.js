const dataDay1 = require('./data/day1.json');
const { fuelCounterUpper } = require('./day1');

console.log('⭐ Advent of Code 2019 ⭐');
console.group('Day One⛽');
console.log('Fuel Counter-Upper:', fuelCounterUpper(dataDay1.data));

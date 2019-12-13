const {
  pipe,
  reduce,
  add,
} = require('ramda');

const substract = (num) => (amount) => amount - num;
const divideBy = (divisor) => (dividend) => dividend / divisor;
const roundDown = (num) => Math.floor(num);

const fuelCalculator = (mass) => (
  pipe(
    divideBy(3),
    roundDown,
    substract(2),
  )(mass)
);

const fuelCounterUpper = (masses) => (
  reduce(
    (acc, value) => add(acc, fuelCalculator(value)),
    0,
    masses,
  )
);

module.exports = { fuelCalculator, fuelCounterUpper };

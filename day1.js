const { pipe } = require('ramda');

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

module.exports = { fuelCalculator };

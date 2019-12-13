const { compose } = require('ramda');

const substract = (num) => (amount) => amount - num;
const divideBy = (divisor) => (dividend) => dividend / divisor;
const roundDown = (num) => Math.floor(num);

const fuelCalculator = (mass) => (
  compose(
    substract(2),
    roundDown,
    divideBy(3),
  )(mass)
);

module.exports = { fuelCalculator };

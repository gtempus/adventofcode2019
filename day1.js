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

const fuelCalcCalc = (mass) => (mass <= 0 ? 0 : mass + fuelCalcCalc(fuelCalculator(mass)));

const fuelCalculatorCalculator = (mass) => (fuelCalcCalc(fuelCalculator(mass)));

const fuelCounterUpper = (calcFn) => (masses) => (
  reduce(
    (acc, value) => add(acc, calcFn(value)),
    0,
    masses,
  )
);

module.exports = {
  fuelCalculator,
  fuelCalculatorCalculator,
  fuelCounterUpper: fuelCounterUpper(fuelCalculator),
  fuelCounterUpperWithFuel: fuelCounterUpper(fuelCalculatorCalculator),
};

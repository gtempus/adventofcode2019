/* eslint-disable no-undef */
const {
  fuelCalculator,
  fuelCalculatorCalculator,
  fuelCounterUpper,
  fuelCounterUpperWithFuel,
} = require('../day1');

describe('Fuel Calculator', () => {
  it('returns 2 for a mass of 12', () => {
    const result = fuelCalculator(12);
    expect(result).toBe(2);
  });

  it('returns 2 for a mass of 14', () => {
    const result = fuelCalculator(14);
    expect(result).toBe(2);
  });

  it('returns 654 for a mass of 1969', () => {
    const result = fuelCalculator(1969);
    expect(result).toBe(654);
  });

  it('returns 33583 for a mass of 100756', () => {
    const result = fuelCalculator(100756);
    expect(result).toBe(33583);
  });
});

describe('Fuel Calculator Calculator', () => {
  it('returns 2 for a mass of 12', () => {
    const result = fuelCalculatorCalculator(12);
    expect(result).toBe(2);
  });

  it('returns 966 for a mass of 1969', () => {
    const result = fuelCalculatorCalculator(1969);
    expect(result).toBe(966);
  });

  it('returns 50346 for a mass of 100756', () => {
    const result = fuelCalculatorCalculator(100756);
    expect(result).toBe(50346);
  });
});

describe('Fuel Counter-Upper', () => {
  it('sums a list of masses', () => {
    const result = fuelCounterUpper([12, 14, 1969, 100756]);
    expect(result).toBe(34241);
  });

  it('sums a list of masses considering fuel mass', () => {
    const result = fuelCounterUpperWithFuel([12, 14, 1969, 100756]);
    expect(result).toBe(51316);
  });
});

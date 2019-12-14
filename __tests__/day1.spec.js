/* eslint-disable no-undef */
const { fuelCalculator, fuelCounterUpper } = require('../day1');

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

describe('Fuel Counter-Upper', () => {
  it('sums a list of masses', () => {
    const result = fuelCounterUpper([12, 14, 1969, 100756]);
    expect(result).toBe(34241);
  });
});

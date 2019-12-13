/* eslint-disable no-undef */
const { fuelCalculator } = require('../day1');

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

  xit('returns 33583 for a mass of 100756', () => {
    const result = fuelCalculator(100756);
    expect(result).toBe(33583);
  });
});

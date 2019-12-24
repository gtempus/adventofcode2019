/* eslint-disable no-undef */
const { isPwdCandidate } = require('../day4');

describe('A password candidate', () => {
  it('has at least one repeating and adjacent number', () => {
    const result = isPwdCandidate(122345);
    expect(result).toBe(true);
  });

  it('rejects if there are more than two repeating numbers', () => {
    const result = isPwdCandidate(123444);
    expect(result).toBe(false);
  });

  it('rejects a candidate if there is no repeating number', () => {
    const result = isPwdCandidate(123789);
    expect(result).toBe(false);
  });

  it('accepts a candidate if there is only equal or ascending numbers', () => {
    const result = isPwdCandidate(111223);
    expect(result).toBe(true);
  });

  it('rejects a candidate if there are decending numbers', () => {
    const result = isPwdCandidate(223450);
    expect(result).toBe(false);
  });
});

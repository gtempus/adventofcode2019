/* eslint-disable no-undef */
const { nextInstruction } = require('../day2');

describe('Program Counter', () => {
  it('increments by 4 each time', () => {
    let result = nextInstruction();
    expect(result).toBe(0);
    result = nextInstruction();
    expect(result).toBe(4);
  });
});


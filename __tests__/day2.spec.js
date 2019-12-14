/* eslint-disable no-undef */
const {
  nextInstruction,
  fetch,
  addFn,
  haltFn,
  decode,
  store,
} = require('../day2');

describe('Program Counter', () => {
  it('increments by 4 each time', () => {
    let result = nextInstruction();
    expect(result).toBe(0);
    result = nextInstruction();
    expect(result).toBe(4);
  });
});

describe('Fetch', () => {
  it('fetches the requested value from the program', () => {
    const fetchWithProgram = fetch([0, 4, 5, 1, 30]);
    const result = fetchWithProgram(3);
    expect(result).toBe(1);
  });
});

describe('Decode', () => {
  it('recognizes an ADD instruction', () => {
    const result = decode(1);
    expect(result).toBe(addFn);
  });

  it('recognized a HALT instruction', () => {
    const result = decode(99);
    expect(result).toBe(haltFn);
  });
});

describe('Evaluate', () => {
  describe('ADD', () => {
    it('adds the two values', () => {
      const addFnWithProgram = addFn([1, 2, 1, 0]);
      const result = addFnWithProgram(0);
      expect(result).toBe(3);
    });
  });

  describe('HALT', () => {
    it('is a no-op for now', () => {
      const haltFnWithProgram = haltFn([1, 2, 1, 0]);
      const result = haltFnWithProgram(0);
      expect(result).toMatchObject({});
    });
  });

  describe('Storing the result', () => {
    it('stores the value at the given program position', () => {
      const storeWithProgram = store([0, 1, 5, 0]);
      const result = storeWithProgram(0, 20);
      expect(result).toMatchObject([20, 1, 5, 0]);
    });
  });
});

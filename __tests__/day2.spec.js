/* eslint-disable no-undef */
const {
  nextInstruction,
  fetch,
  addFn,
  haltFn,
  decode,
  execute,
  store,
  shipsComputer,
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

describe('Execute', () => {
  describe('ADD', () => {
    it('adds the two values', () => {
      const addFnWithProgram = addFn([1, 0, 2, 0]);
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

    describe('Executing an operation', () => {
      it('executes the ADD funtion', () => {
        const executeWithProgram = execute([1, 2, 1, 0], 0);
        const result = executeWithProgram(addFn);
        expect(result).toMatchObject({ value: 3, position: 0 });
      });
    });
  });

  describe('Storing the result', () => {
    it('stores the value at the given program position', () => {
      const storeWithProgram = store([0, 1, 5, 0]);
      const result = storeWithProgram({ position: 0, value: 20 });
      expect(result).toMatchObject([20, 1, 5, 0]);
    });
  });
});

describe('Ships Computer', () => {
  it('executes a simple program that adds', () => {
    const result = shipsComputer([1, 0, 0, 0, 99]);
    expect(result).toMatchObject([2, 0, 0, 0, 99]);
  });

  xit('executes a simple program that multiplies', () => {
    const result = shipsComputer([2, 3, 0, 3, 99]);
    expect(result).toMatchObject([2, 3, 0, 6, 99]);
  });
});

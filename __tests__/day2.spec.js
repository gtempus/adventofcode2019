/* eslint-disable no-undef */
const {
  nextInstruction,
  fetch,
  addFn,
  multFn,
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
    const result = fetch({ program: [0, 4, 5, 1, 30], pc: 0 });
    expect(result).toMatchObject({ program: [0, 4, 5, 1, 30], pc: 0, value: 0 });
  });
});

describe('Decode', () => {
  it('recognizes an ADD instruction', () => {
    const result = decode({ program: [0, 4, 5, 1, 30], pc: 0, value: 1 });
    expect(result).toMatchObject({
      program: [0, 4, 5, 1, 30],
      pc: 0,
      value: 1,
      op: addFn,
    });
  });

  it('recognized a HALT instruction', () => {
    const result = decode({ program: [99, 4, 5, 1, 30], pc: 0, value: 99 });
    expect(result).toMatchObject({
      program: [99, 4, 5, 1, 30],
      pc: 0,
      value: 99,
      op: haltFn,
    });
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

  describe('MULTIPLY', () => {
    it('multiplies the two values', () => {
      const multFnWithProgram = multFn([2, 0, 2, 0]);
      const result = multFnWithProgram(0);
      expect(result).toBe(4);
    });
  });

  describe('HALT', () => {
    it('throws an exception', () => {
      const haltFnWithProgram = haltFn([99, 2, 1, 0]);
      expect(() => { haltFnWithProgram(0); }).toThrow(new Error('Halting!'));
    });

    describe('Executing an operation', () => {
      it('executes the ADD funtion', () => {
        const result = execute(
          {
            program: [1, 0, 0, 0, 30],
            pc: 0,
            value: 1,
            op: addFn,
          },
        );
        expect(result).toMatchObject({ evaluation: { value: 2, position: 0 } });
      });
    });
  });

  describe('Storing the result', () => {
    it('stores the value at the given program position', () => {
      const result = store({ program: [1, 0, 0, 0, 30], evaluation: { value: 2, position: 0 } });
      expect(result).toMatchObject([2, 0, 0, 0, 30]);
    });
  });
});

describe('Ships Computer', () => {
  it('executes a simple program that adds', () => {
    const result = shipsComputer([1, 0, 0, 0, 99]);
    expect(result).toMatchObject([2, 0, 0, 0, 99]);
  });

  it('executes a simple program that multiplies', () => {
    const result = shipsComputer([2, 3, 0, 3, 99]);
    expect(result).toMatchObject([2, 3, 0, 6, 99]);
  });

  it('executes a simple program that multiplies and stores a number at the end', () => {
    const result = shipsComputer([2, 4, 4, 5, 99, 0]);
    expect(result).toMatchObject([2, 4, 4, 5, 99, 9801]);
  });

  it('executes a two instruction program', () => {
    const result = shipsComputer([1, 1, 1, 4, 99, 5, 6, 0, 99]);
    expect(result).toMatchObject([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  });
});

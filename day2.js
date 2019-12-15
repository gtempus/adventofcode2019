const {
  update,
  pipe,
} = require('ramda');

/*
 * Roll over, Von Neumann!!!
 */

function* incrementBy4() {
  let index = 0;
  while (true) {
    yield index;
    index += 4;
  }
}

let programCounter = incrementBy4();

const nextInstruction = () => programCounter.next().value;
const fetch = ({ program, pc }) => (
  {
    program,
    pc,
    value: program[pc],
  }
);
const addFn = (program) => (instructionStart) => (
  fetch({ program, pc: program[instructionStart + 1] }).value
    + fetch({ program, pc: program[instructionStart + 2] }).value
);
const multFn = (program) => (instructionStart) => (
  fetch({ program, pc: program[instructionStart + 1] }).value
    * fetch({ program, pc: program[instructionStart + 2] }).value
);
const haltFn = () => () => { throw new Error('Halting!'); };
const decode = ({ program, pc, value }) => (
  /* eslint-disable no-nested-ternary, max-len */
  {
    program,
    pc,
    value,
    op: value === 1 ? addFn : value === 2 ? multFn : value === 99 ? haltFn : undefined,
  }
);

const execute = ({
  program, pc, value, op,
}) => (
  {
    program,
    pc,
    value,
    op,
    evaluation: {
      value: op(program)(pc),
      position: program[pc + 3],
    },
  }
);

const store = ({ program, evaluation: { position, value } }) => (
  update(position, value, program)
);

const shipsComputer = (program) => {
  programCounter = incrementBy4();
  let output = program;
  try {
    while (true) {
      output = pipe(
        fetch,
        decode,
        execute,
        store,
      )({ program: output, pc: nextInstruction() });
    }
  } catch (halt) {
    console.info('Halting');
  }
  return output;
};

const shipsComputerParamFinder = (program) => {
  for (let i = 0; i < 100; i += 1) {
    for (let j = 0; j < 100; j += 1) {
      const newProgram = [...program];
      newProgram[1] = i;
      newProgram[2] = j;
      const result = shipsComputer(newProgram);
      if (result[0] === 19690720) {
        return 100 * result[1] + result[2];
      }
    }
  }
  return 'No Answer!';
};

module.exports = {
  nextInstruction,
  fetch,
  addFn,
  multFn,
  haltFn,
  decode,
  execute,
  store,
  shipsComputer,
  shipsComputerParamFinder,
};

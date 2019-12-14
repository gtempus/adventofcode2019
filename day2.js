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
const fetch = (program) => (position) => program[position];
const addFn = (program) => (instructionStart) => (
  fetch(program)(program[instructionStart + 1]) + fetch(program)(program[instructionStart + 2])
);
const haltFn = () => () => ({});
const decode = (instruction) => (
  /* eslint-disable no-nested-ternary */
  instruction === 1 ? addFn : instruction === 99 ? haltFn : undefined
);

const execute = (program, instructionStart) => (operationFn) => (
  {
    value: operationFn(program)(instructionStart),
    position: program[instructionStart + 3],
  }
);

const store = (program) => ({ position, value }) => (
  update(position, value, program)
);

/* eslint-disable no-sequences */
const logit = (message) => (input) => (console.debug(message, { input }), input);

const shipsComputer = (program) => {
  programCounter = incrementBy4();
  return pipe(
    nextInstruction,
    logit('sending to `fetch`:'),
    fetch(program),
    logit('sending to `decode`:'),
    decode,
    logit('sending to `execute`:'),
    execute(program, 0),
    logit('sending to `store`:'),
    store(program),
  )(program);
};

module.exports = {
  nextInstruction,
  fetch,
  addFn,
  haltFn,
  decode,
  execute,
  store,
  shipsComputer,
};

const { update } = require('ramda');

/*
 * Roll over, Von Neumann!!!
 */
const programCounter = (function* incrementBy4() {
  let index = 0;
  while (true) {
    yield index;
    index += 4;
  }
}());

const nextInstruction = () => programCounter.next().value;
const fetch = (program) => (position) => program[position];
const addFn = (program) => (instructionStart) => (
  program[instructionStart + 1] + program[instructionStart + 2]
);
const haltFn = () => () => ({});
const decode = (instruction) => (
  /* eslint-disable no-nested-ternary */
  instruction === 1 ? addFn : instruction === 99 ? haltFn : undefined
);
const store = (program) => (position, value) => (
  update(position, value, program)
);

module.exports = {
  nextInstruction,
  fetch,
  addFn,
  haltFn,
  decode,
  store,
};

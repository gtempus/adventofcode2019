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

module.exports = { nextInstruction };

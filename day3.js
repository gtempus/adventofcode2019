const { pipe } = require('ramda');

const split = (directive) => directive.split('');

const parseIntFromArray = (offset) => (
  Number.parseInt(offset.join(''), 10)
);

/* eslint-disable no-nested-ternary */
const offset = ([direction, ...rest]) => (
  direction === 'U' ? [0, parseIntFromArray(rest)]
    : direction === 'D' ? [0, -(parseIntFromArray(rest))]
      : direction === 'L' ? [-(parseIntFromArray(rest)), 0]
        : direction === 'R' ? [(parseIntFromArray(rest)), 0]
          : [0, 0] // no-op
);

const coordinateFromDirection = (directive) => (
  pipe(
    split,
    offset,
  )(directive)
);

const convertInstructions = (directives) => (
  directives.map(coordinateFromDirection)
);

module.exports = {
  coordinateFromDirection,
  convertInstructions,
};

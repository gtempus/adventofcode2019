const {
  pipe,
  reduce,
} = require('ramda');

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

const add = (acc, [x2, y2]) => {
  const newOne = [...acc];
  const [x1, y1] = newOne[newOne.length - 1];
  newOne.push([x1 + x2, y1 + y2]);
  return newOne;
};

const removeOrigin = (cartesianPositions) => (
  cartesianPositions.slice(1)
);

const translateWire = (cartesianDirectives) => (
  pipe(
    reduce(
      add,
      [[0, 0]],
    ),
    removeOrigin,
  )(cartesianDirectives)
);

const mattLength = ([x, y]) => Math.abs(x) + Math.abs(y);

module.exports = {
  coordinateFromDirection,
  convertInstructions,
  translateWire,
  mattLength,
};

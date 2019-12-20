/* eslint-disable no-undef */
const { intersection } = require('ramda');
const {
  coordinateFromDirection,
  convertInstructions,
  translateWire,
  mattLength,
} = require('../day3');

describe('Convert wire direction to cartesian point', () => {
  it('understands U directive', () => {
    const result = coordinateFromDirection('U23');
    expect(result).toMatchObject([0, 23]);
  });

  it('understands D directive', () => {
    const result = coordinateFromDirection('D13');
    expect(result).toMatchObject([0, -13]);
  });

  it('understands L directive', () => {
    const result = coordinateFromDirection('L67');
    expect(result).toMatchObject([-67, 0]);
  });

  it('understands R directive', () => {
    const result = coordinateFromDirection('R42');
    expect(result).toMatchObject([42, 0]);
  });
});

describe('Converting a sequence of directives to cartesian coordinates', () => {
  it('converts', () => {
    const directives = ['U23', 'D13', 'L67', 'R42'];
    const result = convertInstructions(directives);
    expect(result).toMatchObject([[0, 23], [0, -13], [-67, 0], [42, 0]]);
  });
});

describe('Location of wire in coordinates', () => {
  it('transforms to coordinates by reducing', () => {
    const cartesianDirectives = [[0, 23], [0, -13], [-67, 0], [42, 0]];
    const result = translateWire(cartesianDirectives);
    expect(result).toMatchObject([[0, 23], [0, 10], [-67, 10], [-25, 10]]);
  });
});

describe('Calculate Manhattan distance', () => {
  it('handles positive coordinates', () => {
    const result = mattLength([6, 4]);
    expect(result).toBe(10);
  });

  it('handles negative coordinates', () => {
    const result = mattLength([-6, -4]);
    expect(result).toBe(10);
  });

  it('handles both negative and positive coordinates', () => {
    const result = mattLength([-6, 4]);
    expect(result).toBe(10);
  });
});

describe('Finding nearest crossing', () => {
  //  const wire1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
  //  const wire2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];
  const wire1 = ['R8', 'U5', 'L5', 'D3'];
  const wire2 = ['U7', 'R6', 'D4', 'L4'];
  const wire1Route = translateWire(convertInstructions(wire1));
  const wire2Route = translateWire(convertInstructions(wire2));
  console.debug(wire1Route, wire2Route);
  console.debug(intersection(wire1Route, wire2Route));
});

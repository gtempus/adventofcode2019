/* eslint-disable no-undef */
const {
  coordinateFromDirection,
  convertInstructions,
  translateWire,
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

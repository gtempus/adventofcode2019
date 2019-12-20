/* eslint-disable no-undef */
const { coordinateFromDirection } = require('../day3');

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

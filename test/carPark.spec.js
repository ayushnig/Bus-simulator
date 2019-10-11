/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const carPark = require('./../simulator/carPark');

describe('Car Park Validation and Checks', () => {
  it('Checking the current state index not to be equal', () => {
    let position = { x: -10, y: -5 };
    position = carPark.checkIndex(position);
    expect(position.x).not.to.equal(2);
    expect(position.y).not.to.equal(2);
  });
  it('Checking the current state index to be equal', () => {
    let position = { x: 2, y: 2 };
    position = carPark.checkIndex(position);
    expect(position.x).to.equal(2);
    expect(position.y).to.equal(2);
  });
  it('Validating the position of the bus to not be out of bounds', () => {
    carPark.parkSize(10, 10);
    expect(carPark.isInbound({ x: 20, y: 20 })).to.not.be.true;
    expect(carPark.isInbound({ x: 2, y: 2 })).to.be.true;
    expect(carPark.isInbound({ x: 2, y: 1 })).to.be.true;
  });
});

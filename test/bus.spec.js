/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const bus = require('./../simulator/bus');

describe('Direction of the bus', () => {
  it('should return new facing of the bus in Right direction', () => {
    expect(bus.faceRight('WEST')).to.equal('NORTH');
  });
  it('should return new facing of the bus in Left direction', () => {
    expect(bus.faceLeft('NORTH')).to.equal('WEST');
  });
  it('should move to the new position of the bus', () => {
    let currentPosition = { x: 1, y: 1 };
    currentPosition = bus.move('NORTH', currentPosition);
    expect(currentPosition.x).to.equal(1);
    expect(currentPosition.y).to.equal(2);
  });
});

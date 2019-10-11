/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const command = require('./../simulator/commands');

let res;
describe('Vaildating and performing the required operations for command', () => {
  const cmdProcess = command.processCmd;
  const { place } = command;

  it('should move the face of the bus to left of North i.e. West ', () => {
    place('0,0,NORTH');
    res = cmdProcess('LEFT');
    expect(res).to.equal('WEST');
  });
  it('should move the face of the bus to right of North i.e. East', () => {
    place('0,0,NORTH');
    res = cmdProcess('Right');
    expect(res).to.equal('EAST');
  });
  it('should move the bus to one coordinate', () => {
    place('2,3,EAST');
    res = cmdProcess('move');
    expect(res.x).to.equal(3);
    expect(res.y).to.equal(3);
  });
  it('should return res = TRUE if direction is correct', () => {
    res = place('place 0,0,WEST'.substr(6));
    expect(res).to.be.true;
  });
  it('should return res = False if direction is incorrect', () => {
    res = place('place 0,0,ABC'.substr(6));
    expect(res).to.be.false;
  });
  it('should return res = False if position is invalid', () => {
    res = place('-1,-2,EAST');
    expect(res).to.be.false;
  });
  it('should tell the user if the bus move is going out of bounds', () => {
    place('0,1,WEST');
    res = cmdProcess('move');
    expect(res.x).to.equal(0);
    expect(res.y).to.equal(1);
  });
  it('should return null if the command is not defined', () => {
    place('2,0,WEST');
    res = cmdProcess('blah blah');
    expect(res).to.be.null;
    res = cmdProcess('right');
    expect(res).not.to.be.null;
  });
  it('should return null if position becomes invalid', () => {
    place('-2,7,WEST');
    res = cmdProcess('move');
    expect(res).to.be.null;
    res = cmdProcess('left');
    expect(res).to.be.null;
    res = cmdProcess('right');
    expect(res).to.be.null;
  });
});

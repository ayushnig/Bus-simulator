/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
const bus = require('./bus');
const parkSimulator = require('./carPark');
const { busState, directions } = require('../constants');

parkSimulator.parkSize(5, 5); // Can be done Dynamically, placed as it is explicitly given 5*5

/**
     * To Move the Bus
     * @return {boolean} If direction is wrong, If everything  is valid
     */
const move = () => {
  const coordinates = bus.move(busState.facing, busState.coordinates);
  busState.coordinates = parkSimulator.checkIndex(coordinates);
};

/**
     * Processes the command
     * @param  {Sring} cmd Command given by the user
     * @return {Object} Object containg the new state of the bus
     */
const processCmd = (cmd) => {
  cmd = cmd.trim().toLowerCase();
  if (parkSimulator.isInbound(busState.coordinates) === false) {
    return (cmd === 'report') ? busState : null;
  }

  switch (cmd) {
    case 'move':
      move();
      return busState.coordinates;
    case 'left':
      busState.facing = bus.faceLeft(busState.facing);
      return busState.facing;
    case 'right':
      busState.facing = bus.faceRight(busState.facing);
      return busState.facing;
    case 'report':
      return busState;
    default:
      console.error(`Invalid Command ${cmd}`);
      return null;
  }
};

/**
     * To PLACE the Bus
     * @param  {Object} param conatins X and Y-coordinate, and direction
     * @return {boolean}   If direction is wrong, If everything  is valid
     */
const place = (param) => {
  param = param.split(',');
  if (param && param[2] && directions.includes(param[2].toLowerCase())) {
    busState.coordinates = {
      x: +param[0], y: +param[1],
    };
    busState.facing = param[2];
    return parkSimulator.isInbound(busState.coordinates);
  }
  return false;
};

module.exports = { processCmd, place };

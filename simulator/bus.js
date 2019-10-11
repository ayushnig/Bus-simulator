/* eslint-disable no-param-reassign */
const direction = require('../constants.js').postions;

const dir = Object.keys(direction);

/**
     * gets the direction of the bus
     * @param {Object} initialState gets the intial state of the bus
     * @return {object} object containing the state of the bus
     */

const getDirection = (initialState) => {
  initialState = (dir.indexOf(initialState) > -1) ? initialState : 'NORTH';
  return direction[initialState];
};

/**
     * Turns the bus left returns the new state
     * @param {Object} initialState gets the intial state of the bus
     * @return {object} object containing the new state of the bus
     */
const faceLeft = (initialState) => getDirection(initialState).left;

/**
     * Turns the bus right returns the new state
     * @param {Object} initialState gets the intial state of the bus
     * @return {object} object containing the state of the bus
     */
const faceRight = (initialState) => getDirection(initialState).right;

/**
     * Move the bus to given coordinate
     * @param {String} facing Direction of the bus facing currently
     * @param {object} position Position of the bus currently   
     * @return {object} object containing the state of the bus
     */
const move = (facing, position) => {
  const obj = getDirection(facing);
  position.x += obj.startPointX;
  position.y += obj.startPointY;
  return position;
};

module.exports = { faceLeft, faceRight, move };

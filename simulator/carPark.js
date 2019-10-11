/* eslint-disable no-param-reassign */

// Validating position of object remains within the given size.

const x1 = 0; const y1 = 0; let x2 = 5; let y2 = 5;
const parkSize = (rangeX, rangeY) => {
  x2 = Math.max(0, x1 + rangeX - 1);
  y2 = Math.max(0, y1 + rangeY - 1);
};
const checkIndex = (pos) => {
  pos.x = Math.max(x1, pos.x);
  pos.x = Math.min(x2, pos.x);
  pos.y = Math.max(y1, pos.y);
  pos.y = Math.min(y2, pos.y);
  return pos;
};
const isInbound = (pos) => {
  if (pos.x < x1) return false;
  if (pos.y < y1) return false;
  if (pos.x > x2) return false;
  if (pos.y > y2) return false;
  return true;
};

module.exports = { parkSize, checkIndex, isInbound };

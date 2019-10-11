module.exports.postions = {
  NORTH: {
    startPointX: 0, startPointY: 1, left: 'WEST', right: 'EAST',
  },
  SOUTH: {
    startPointX: 0, startPointY: -1, left: 'EAST', right: 'WEST',
  },
  EAST: {
    startPointX: 1, startPointY: 0, left: 'NORTH', right: 'SOUTH',
  },
  WEST: {
    startPointX: -1, startPointY: 0, left: 'SOUTH', right: 'NORTH',
  },
};


module.exports.busState = {
  coordinates: { x: -1, y: -1 },
  facing: 'NORTH',
};

module.exports.directions = ['north', 'south', 'east', 'west'];

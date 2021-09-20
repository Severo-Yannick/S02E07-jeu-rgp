var app = {
  init: function () {
    console.log('init !');
  },

  player: {
    x: 0,
    y: 0,
    direction: 'right',
  },

  targetCell: {
    x: 5,
    y: 3,
  }
};

document.addEventListener('DOMContentLoaded', app.init); 
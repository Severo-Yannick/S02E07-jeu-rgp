var app = {
  init: () => {
    console.log('init !');
    app.drawBoard();
  },
  // Position du joueur 
  player: {
    x: 0,
    y: 0,
    direction: 'right',
  },
  // Case d'arrivée
  targetCell: {
    x: 5,
    y: 3,
  },
  // Création de div et ajout au DOM
  drawBoard: () => {
    let boardElement = document.getElementById('board');

    for (let rowCount = 0; rowCount < 4; rowCount++) {
      let rowElement = app.createRow(rowCount);
      boardElement.appendChild(rowElement);
    }
  },
  // Création de lignes
  createRow: (y) => {
    let rowElement = document.createElement('div');
    rowElement.classList.add('row');

    for (let cellCount = 0; cellCount < 6; cellCount++) {
      // cellCount est la postion horizontale x
      let cellElement = app.createCell(cellCount, y);
      rowElement.appendChild(cellElement);
    }

    return rowElement;
  },
  // Création de cellules
  createCell: (x, y) => {
    let cellElement = document.createElement('div');
    cellElement.classList.add('cell');

    return cellElement;
  },
};


document.addEventListener('DOMContentLoaded', app.init);

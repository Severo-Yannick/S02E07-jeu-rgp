var app = {
  init: () => {
    console.log('init !');
    app.listenKeyboardEvents();
    app.drawBoard();
  },
  // Ecoute des evenements clavier (pression sur les touches)
  listenKeyboardEvents: () => {
    document.addEventListener(
      "keyup", 
        event => {
          switch(event.code) {
            case 'ArrowUp':
              app.moveForward();
              break;

            case 'ArrowLeft':
              app.turnLeft();
              break;

            case 'ArrowRight':
              app.turnRight();
              break;
          }
        }    
    );
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
  // Game over
  gameOver: false,
  // Création de div et ajout au DOM
  drawBoard: () => {
    let boardElement = document.getElementById('board');
    document.getElementById('player')

    for (let rowCount = 0; rowCount < 4; rowCount++) {
      let rowElement = app.createRow(rowCount);
      boardElement.appendChild(rowElement);
    }

    app.isGameOver();
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

    // Si la case courante a les mêmes coordonnées (x ET y) que la variable targetCell
    if (x === app.targetCell.x && y === app.targetCell.y) {
      cellElement.classList.add('targetCell');
    }
    // Si la case courante a les mêmes coordonnées (x ET y) que la variable qui correspond au joueu
    if (x === app.player.x && y === app.player.y) {
      let playerElement = document.createElement('div');
      playerElement.classList.add('player');
      playerElement.classList.add(`player--${app.player.direction}`);

      cellElement.appendChild(playerElement);
    }

    return cellElement;
  },
  // Vide le contenu du board
  clearBoard: () => {
    document.getElementById('board').innerHTML = '';
  },
  // redrawBoard appelle clearBoard(vide le contenu) puis drawBoard(met à jour la nouvelle valeur)
  redrawBoard: () => {
    app.clearBoard();
    app.drawBoard();
  },
  // Tourner à gauche
  turnLeft : () => {
    // Si le jeu se termine
    if(app.gameOver) {
      return;
    }

    switch(app.player.direction) {
      case 'up':
        app.player.direction = 'left';
        break;

      case 'left':
        app.player.direction = 'down';
        break;

      case 'down':
        app.player.direction = 'right';
        break;

      case 'right':
        app.player.direction = 'up';
        break;
    } 

    app.redrawBoard();
  },
  // Tourner à droite
  turnRight : () => {
    // Si le jeu se termine
    if(app.gameOver) {
      return;
    }

    switch(app.player.direction) {
      case 'up':
        app.player.direction = 'right';
        break;

      case 'right':
        app.player.direction = 'down';
        break;

      case 'down':
        app.player.direction = 'left';
        break;

      case 'left':
        app.player.direction = 'up';
        break;
    }

    app.redrawBoard();
  },
  // Avancer dans la direction vers laquelle il est tourné
  moveForward: () => {
    // Si le jeu se termine
    if(app.gameOver) {
      return;
    }

    switch(app.player.direction) {
    case 'up':
      if(app.player.y > 0) {
        app.player.y--;
      }
      break;

    case 'right':
      if(app.player.x < 5) {
        app.player.x++;
      }
      break;

    case 'down':
      if(app.player.y < 3) {
        app.player.y++;
      }
      break;

    case 'left':
      if(app.player.x > 0) {
        app.player.x--;
      }
    break;
  } 

    app.redrawBoard();
  },
  // Partie gagneé
  isGameOver: () => {
    if(app.player.x === app.targetCell.x && app.player.y === app.targetCell.y) {
      app.gameOver = true;
      alert("Et c'est gagné ! 🎉");
    }
  }
};

document.addEventListener('DOMContentLoaded', app.init);

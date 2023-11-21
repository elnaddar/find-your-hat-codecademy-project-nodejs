const prompt = require('prompt-sync')({sigint: true});
const {Field} = require('./my-modules/field');
const {Game} = require('./my-modules/game');
const {GameTheme} = require('./my-modules/game-theme');
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const gameTheme = new GameTheme(hat, hole, fieldCharacter, pathCharacter);

const initField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  
const game = new Game(initField, gameTheme);
game.play();




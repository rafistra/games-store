const gameRoute = require('express').Router();
const { GameController } = require('../controllers/');

gameRoute.get('/', GameController.getAllGames);
gameRoute.post('/add', GameController.add);
gameRoute.post('/update/:id', GameController.update);
gameRoute.get('/delete/:id', GameController.delete);

//Game with genres
gameRoute.get('/:id/genres', GameController.getGameGenres);

//All Game with all details
gameRoute.get('/details', GameController.getAllGameDetails);
//A Game with all details
gameRoute.get('/details/:id', GameController.getGameDetails);


module.exports = gameRoute;
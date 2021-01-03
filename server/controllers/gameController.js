const con = require('../utils/databse')
const Game = require('../models/gameModel');


exports.getAllGames = async (req, res, next) => {
    await Game.findAll().then(games => {
        res.send(games)
    }).catch(err => {
        res.send("error load users")
    })
}


exports.getGamebyId = async (req, res, next) => {
    let gameId = req.query.id;

    await Game.findOne({where:{id:gameId}}).then(game => {
        res.send(game)
    }).catch(err => {
        res.send("error load users")
    })
}



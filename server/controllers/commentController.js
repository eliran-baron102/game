const con = require('../utils/databse')
const Comment = require('../models/commentsModel');


exports.getAllCommentsByGameId = async (req, res, next) => {
    let Id = req.query.id;
    await Comment.findAll({where:{gameId:Id}}).then(comments => {
        res.send(comments)
    }).catch(err => {
        res.send("error load users")
    })
}


exports.insertComment = async (req, res, next) => {
    let gameId = req.query.id;
    let text = req.query.text;
    console.log(gameId , text)

    let ob = {
        gameId:gameId,
        text:text,
    }
    console.log(ob)
    await Comment.create(ob).then(comment => {
        res.send(comment)
    }).catch(err => {
        res.send("error load users")
    })
}
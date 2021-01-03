const con = require('../utils/databse')
const Users = require('../models/usersModel');


exports.getAllUsers = async (req, res, next) => {
    let id = req.query.id;

    await Users.findAll().then(users => {
        res.send(users)
    }).catch(err => {
        res.send("error load users")
    })
}



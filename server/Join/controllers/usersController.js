const con = require('../utils/databse')
const Users = require('../models/usersModel');
const sendToClient = require('../utils/returnObToClient')


exports.getAllUsers = async (req, res, next) => {
    await Users.findAll().then(users => {
        res.send(sendToClient(users, null, 1))
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}


exports.getUserById = async (req, res, next) => {
    let id = req.query.id;

    await Users.findAll({
        where: {
            id: id,
        }
    }).then(users => {
        res.send(users)
    }).catch(err => {
        res.send("error load users")
    })
}


exports.insertUser = async (req, res, next) => {
    console.log("InsertUser : ", req.body)
    let user = req.body;
    await Users.create(user).then(result => {
        res.send(result)
    }).catch(err => {
        res.send(err)
    });
}



exports.deleteUser = async (req, res, next) => {
    let id = req.query.id;
    await Users.destroy({
        where: {
            id: id
        }
    }).then(users => {
        res.send(sendToClient(users, null, 1))
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    });
}




exports.updateUser = async (req, res, next) => {
    console.log("Update : ", req.body)
    await Users.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(users => {
        res.send(sendToClient(users, null, 1))
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    });
}
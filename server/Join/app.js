const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const Users = require('./models/usersModel');
const Products = require('./models/productsModel');

const Sequelize = require('sequelize');
const sequelize = require('./utils/databse');

const User = require('./models/usersModel');
const Post = require('./models/postsModel');
const Todo = require('./models/todosModel');
const Album = require('./models/albumsModel');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

const UsersRoute = require('./routes/usersRoute');
app.use("/users", UsersRoute);

app.use((req, res) => {
    res.send("Page NotFound");
})

User.hasMany(Post);
User.hasMany(Album);
User.hasMany(Todo);

sequelize.sync().then(result => {
    app.listen(5000);
}).catch(err => {
    // logger.log("error", "ERRR " + JSON.stringify(err))
})

const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const Post = sequelize.define('posts', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  body: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  charset: 'utf8',
  collate: 'utf8_general_ci'
});
module.exports = Post;
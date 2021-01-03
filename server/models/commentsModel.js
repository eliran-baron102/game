const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const Comment = sequelize.define('comments', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  gameId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  text: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Comment;
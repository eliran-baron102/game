const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const Todo = sequelize.define('todos', {
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
  completed: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  charset: 'utf8',
  collate: 'utf8_general_ci'
});
module.exports = Todo;
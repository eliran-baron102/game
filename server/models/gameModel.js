const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const Game = sequelize.define('games', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  teamA: {
    type: Sequelize.STRING,
    allowNull: true
  },
  teamB: {
    type: Sequelize.STRING,
    allowNull: true
  },
  scoreA: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  scoreB: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  time: {
    type: Sequelize.DATE,
    allowNull: true
  },
  category: {
    type: Sequelize.STRING,
    allowNull: true
  },
});

module.exports = Game;
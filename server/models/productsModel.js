const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const Products = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  price: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  }
});
module.exports = Products;




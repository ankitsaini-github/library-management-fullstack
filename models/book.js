const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Book = sequelize.define('books', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  bookname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bookissue: {type: Sequelize.DATE, allowNull: false},
  bookreturn: {type: Sequelize.DATE, allowNull: false},
  returnstatus: {type: Sequelize.BOOLEAN, allowNull: false},
});

module.exports = Book;
const Sequelize = require('sequelize');

const connection = new Sequelize('perguntascom','root','admin',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
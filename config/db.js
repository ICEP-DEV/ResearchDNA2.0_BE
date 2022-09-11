const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'research_dna',   //DATABASE
    'root',          // Name of the User
    '',             // Password
    {
        host: 'localhost', //user Address
        dialect: 'mysql'
    }
);

module.exports = sequelize;
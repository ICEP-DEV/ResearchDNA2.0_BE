const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'research-dna',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'research_dna',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;
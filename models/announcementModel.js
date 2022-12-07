const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');
const Supervisor = require('./supervisorModel');
const Announcement = sequelize.define('announcement',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
       
    },

    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    text:{
        type: Sequelize.STRING,
        allowNull: false,
    }
    
} );

User.hasOne(Announcement,{onDelete: 'RESTRICT',foreignKey:'userId'})
Announcement.belongsTo(User)
Supervisor.hasOne(Announcement,{onDelete: 'RESTRICT',foreignKey:'supervisorId'})
Announcement.belongsTo(Supervisor)

module.exports = Announcement;
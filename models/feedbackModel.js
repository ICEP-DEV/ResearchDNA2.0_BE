const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');
const Supervisor = require('./supervisorModel');
const Feedback = sequelize.define('feedback',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
       
    },

    text:{
        type: Sequelize.STRING,
        allowNull: false,
    }

    
} );

User.hasOne(Feedback,{onDelete: 'RESTRICT',foreignKey:'userId'})
Feedback.belongsTo(User)
Supervisor.hasOne(Feedback,{onDelete: 'RESTRICT',foreignKey:'supervisorId'})
Feedback.belongsTo(Supervisor)



module.exports = Feedback;
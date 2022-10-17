const Sequelize = require('sequelize');
const sequelize = require('../config/db');



const Feedback = sequelize.define('feedback',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    text:{
        type: Sequelize.TEXT,
        allowNull: false       

    },


    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})


User.hasMany(Feedback, {onDelete:"RESTRICT",foreignKey:"feedback_id"})
Feedback.belongsTo(feedback_id)

ProjectStatus.hasMany(Feedback, {onDelete:"RESTRICT",foreignKey:"use_id"})
Feedback.belongsTo(use_id)


Goal.hasMany(Feedback, {onDelete:"RESTRICT",foreignKey:"status"})
Feedback.belongsTo(status)



module.exports = Feedback;


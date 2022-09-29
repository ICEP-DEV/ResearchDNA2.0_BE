const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const ProjectStatus = sequelize.define('project_status',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,

    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})


ProjectStatus.beforeCreate(async (projectStatus, options) => {
  
    console.log("cool project status")
  });

module.exports = ProjectStatus;
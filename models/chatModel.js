const Sequelize = require('sequelize')
const sequelize = require('../config/db');
const User = require('./userModel');
const ChatGroup = require('./chatGroupModel')

const Chat = sequelize.define('chat',{
    id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true 
    },
   
    text:{
         type: Sequelize.TEXT,
         allowNull: false   
    },


    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})

// Chat.sync({ alter: true });

User.hasOne(Chat, {onDelete: 'CASCADE',foreignKey: 'userId'})
Chat.belongsTo(User)

ChatGroup.hasOne(Chat, {onDelete: 'CASCADE',foreignKey: 'chatGroupId'})
Chat.belongsTo(ChatGroup)





module.exports = Chat;
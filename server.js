const app = require('./app')
const dotenv = require('dotenv');
const {Sequelize} = require('sequelize')
dotenv.config({ path: './.env' });
const sequelize = require('./config/db')


sequelize.sync()


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Application is running on port ${port}`)
})

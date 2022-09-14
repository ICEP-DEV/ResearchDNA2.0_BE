const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 7000

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

//MySQL
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'research dna'
})

//Get all user
app.get('', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as feedback_id ${connection.threadId}')

        connection.query(' SELECT * from feedback', (err, rows) => {
            connection.release()// return the connection to pool

            if(!err) {
                res.send(rows)
            }else {
                console.log(err)
            }
        })
    })
})

//Get a user by ID
app.get('/:feedback_id', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as 	feedback_id  ${connection.threadId}')

        connection.query(' SELECT * from feedback WHERE feedback_id  = ?',[req.params.feedback_id ], (err, rows) => {
            connection.release()// return the connection to pool

            if(!err) {
                res.send(rows)
            }else {
                console.log(err)
            }
        })
    })
})

//Delete a record / user
app.delete('/:feedback_id ', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as feedback_id  ${connection.threadId}')

        connection.query(' DELETE from feedback  WHERE feedback_id =?', [req.params.feedback_id ],(err, rows) => {
            connection.release()// return the connection to pool

            if(!err) {
                res.send('user with the record feedback_id : ${[req.params.feedback_id ]} has been deleted')
            }else {
                console.log(err)
            }
        })
    })
})

//Add a record / feedback
app.post('', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as feedback_id  ${connection.threadId}')

        
        const feedback_id = req.body.feedback_id ;
        const use_id= req.body.use_id;
        const status= req.body.status;
        

        connection.query('INSERT INTO feedback_id(feedback_id, 	use_id, status) values("'+feedback_id+'","'+use_id+'","'+status+'")', params ,(err, rows) => {
          //  connection.release()// return the connection to pool

            if(!err) {
                res.send('users with the record feedback_id ${params.use_id} has been added')
            }else {
                console.log(err)
            }
        })

        console.log(req.body)
    })
})

//update a record / feedback
app.put('', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as 	feedback_id  ${connection.threadId}')

        const {id,  name, message} = req.body


        connection.query(' UPDATE 	feedback SET use_id =? WHERE status =?',[ feedback_id], params ,(err, rows) => {
            connection.release()// return the connection to pool

            if(!err) {
                res.send('user with the record 	feedback_id : ${params.use_id} has been added')
            }else {
                console.log(err)
            }
        })

        console.log(req.body)
    })
})



//Listen on environment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))

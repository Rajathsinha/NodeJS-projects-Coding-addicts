const express = require('express')

const app = express();

const tasks = require('./routes/tasks')


//middleware

app.use(express.json())




//ROUTES

app.get('/hello',(req,res)=>{
    res.send('Task manager app')
})


app.use('/api/v1/tasks',tasks)





const port= 3002;

app.listen(port,console.log(`Server is listening on the port ${port}`))
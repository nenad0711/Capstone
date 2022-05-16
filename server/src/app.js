import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"

const app = express() // create express app
app.use(morgan('combined')) // app.use to implement module
app.use(bodyParser.json()) // app.use to implement module
app.use(cors())  // app.use to implement module

app.get('/status',(req,res) =>{  // test you app with simple 
    res.send({                   //message back to the browser
      message :'hello world!'})
})
app.listen(process.env.PORT || 8081) //open listening port 8081
//now we can test in the browser with localhost:8081/status
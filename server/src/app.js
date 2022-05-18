import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"

const app = express() // create express app
app.use(bodyParser.json()) // app.use to implement module
app.use(morgan('combined')) // app.use to implement module
app.use(bodyParser.json()) // app.use to implement module
app.use(cors())  // app.use to implement module

app.post('/register',(req,res) =>{  // test you app with simple 
  
  res.send({
  
    message:`your email is ${req.body.email} and ${req.body.password} and ${req.body.childName} and ${req.body.childDOB} ` // req.body.email acceses payload sent from the client, email is type
  })     // POST request changes file because update was done on the client side, GET will be just to retrieve info
})



app.listen(process.env.PORT || 8081) //open listening port 8081
//now we can test in the browser with localhost:8081/status
import express  from "express"
import { connectTOMongoDb } from "./config/dbConfig.js";
import taskRouter from "./Router/taskRouter.js"

const app = express()
const PORT = 8000

// Middleware to parse element 
app.use(express.json());


// connect to mongo db
     connectTOMongoDb()

// Task Router
app.use('/api/tasks', taskRouter)

//start a server 
app.listen(PORT, (error)=>{
    error?
        console.log("Error", error) :
        console.log("your server is running in http://localhost:" +PORT)
})

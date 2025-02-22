
import "dotenv/config"
import path from "path"
import express  from "express"
import {connectTOMongoDb} from "./src/config/dbConfig.js"
import taskRouter from './src/Router/taskRouter.js'




const _dirname  = path.resolve()
const app = express()
const PORT = process.env.PORT  || 8000

// Middleware to parse element 
app.use(express.json());


// connect to mongo db
    connectTOMongoDb()   


// SSR- serve frontend using our nodejs server
app.use('/', express.static(path.join(_dirname, 'frontendBuild')) )

// Task Router
app.use('/api/tasks', taskRouter)

//start a server 
app.listen(PORT, (error)=>{
    error?
        console.log("Error", error) :
        console.log("your server is running in http://localhost:" +PORT)
})

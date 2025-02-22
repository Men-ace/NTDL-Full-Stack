import express from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../model/taskModel.js'

// Initializing express router
const taskRouter = express.Router()

// Index | Get all Tasks
taskRouter.get("/", (req, res) => {
    getTasks()
    .then(tasks => {
        res.json({
            status: "success",
            data: tasks
        })
    })
    .catch(error => {
        res.json({
            status: "error",
            error: error.message || 'Could not fetch data'
        })
    })

})

// Index | Get single Task
taskRouter.get("/:id", (req, res) => {
getTask(req.params.id)
    .then(task =>{

    })
    .catch(error =>{
        res.json({
            status: "error",
            error : error.message || 'could not fetch task'
        })
    })
})

// Show | Post Single Task
taskRouter.post("/", (req, res) => {
    const taskObject = req.body

    createTask(taskObject)
    .then(task => {
        res.json({
            status: "success",
            message: "Task Created",
            data: task
        })
    })
    .catch(error => {
        res.json({
            status: "error",
            error: error.message || 'Could not create task'
        })
    })

})

// Update | Patch single Task
taskRouter.patch("/:id", (req, res) => {
const updatedTask = req.body
const id = req.params.id

    updateTask(updatedTask)
    .then(tasks => {
        res.json({
            status: "success",
            data: tasks
        })
    })
    .catch(error => {
        res.json({
            status: "error",
            error: error.message || 'Could not fetch data'
        })
    })
})


//  Delete | Delete Tasks
taskRouter.delete("/:id", (req, res) => {
    const taskObject = req.body


    deleteTask(taskObject)
    .then(task => {
        res.json({
            status: "success",
            message: "Task deleted ",
            data: task
        })
    })
    .catch(error => {
        res.json({
            status: "error",
            error: error.message || 'Could not delete task'
        })
    })
})

export default taskRouter
// this file has function to execute Queries
// Database operations 
// CRUD operations -> TASK Resource 

import taskModel from "../schema/taskSchema.js";

//Read 
export const getTasks = () =>{
    return taskModel.find();

}

// Read One 
export const getTask = () => {
    return taskModel.findById(id)
}

// Create 
export const createTask = () => {
    return taskModel(taskObject).save()
}

// Update
export const updateTask = (id, updatedData) =>{
    return taskModel.findByIdAndUpdate (id, updatedData)
}


// Delete
export const deleteTask = (id) =>{
    return taskModel.findByIdAndDelete (id)
}


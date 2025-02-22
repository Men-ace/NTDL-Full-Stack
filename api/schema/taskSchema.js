import mongoose, { mongo } from "mongoose";

const TaskSchema = mongoose.Schema({
    name: {
        type:String,
        required: true, 
    },
    timeToComplete : {
        type: Number,
        required: true,
    },
    type:{
        type: String,
        default: 'entry'
    },
    difficulty: 
    {
        type: String,
        default: 'easy'
    },

    priority:{
        type: String,
        default: 'low'
    }
})

export default mongoose.model("task", TaskSchema)
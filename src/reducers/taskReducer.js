import { toast } from "react-toastify"

const initState = {}

const taskReducer = (state = initState, action) =>{
    switch(action.type){
        case "ADD_TASK":{
            toast.success("task added successfully")
            return state
        }

        case "ADD_TASK_ERR":{
            toast.err("an error occurred")
            return state
        }
        case "REMOVE_TASK":{
            toast.warn("task will be deleted")
            return state
        }

        case "REMOVE_TASK_ERR":{
            toast.err("an error occurred")
            return state
        }
        case "CHECK_TASK":{
            toast.success("a task was updated")
            return state
        }

        case "CHECK_TASK_ERR":{
            toast.err("an error occurred")
            return state
        }
        default: return state
    }
}

export default taskReducer
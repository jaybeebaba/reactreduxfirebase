import React, {useState} from 'react'
import {connect} from "react-redux"
import { addTask } from '../../actions/taskActions'

const AddTask = ({addTask}) => {
    const [task, setTask] = useState("")
    const [checked, setChecked] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
       addTask({task, checked})
        setTask("")
    }

    return (
        <div>
             <form className='mt-3' onSubmit={handleSubmit}>
            
  <div className="mb-3">
    <input type="text" className="form-control" id="task" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
  </div>

  <button type="submit" className="btn btn-danger">Add</button>
</form>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addTask: (task)=>dispatch(addTask(task))
  }
}

export default connect(null, mapDispatchToProps)(AddTask)

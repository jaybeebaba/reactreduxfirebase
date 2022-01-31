import React from 'react'
import AddTask from '../tasks/AddTask'
import Tasks from '../tasks/Tasks'

const Dashboard = () => {
    return (
        <div className='container'>
            <h3>Dashboard</h3>
            <AddTask/>
            <Tasks/>
        </div>
    )
}

export default Dashboard

import React from 'react';
import Task from './Task';
import { connect } from "react-redux"
import { compose } from "redux"
import { firestoreConnect } from 'react-redux-firebase';
const Tasks = (props) => {
    return (
        <div className='mt-5'>
            <table className="table table-dark table-striped">
                <thead>
                    <tr className='text-info'>
                        <th scope="col">Tasks</th>
                        <th scope="col">Added On</th>
                        <th scope="col">Status</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {props.tasks && props.tasks.map(task=>{
                   return <Task task={task} key={task.id}/>
                })}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state.firestore?.ordered.tasks);
    return {
        tasks: state.firestore.ordered.tasks,
        uid: state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(ownProps => [
        {
            collection: "tasks",
            where: ["authorId", "==", ownProps.uid],
            orderBy: ["date", "desc"]
        }
    ]))(Tasks);

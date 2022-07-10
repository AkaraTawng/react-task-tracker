import {FaTimes} from 'react-icons/fa';
import React from 'react';

const Task = ({task}) => {
    return (
        <div className='task' >
            <h3>{task.text} <FaTimes/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
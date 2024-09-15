import React from 'react';
import TaskForm from '../TaskForm/TaskForm';

const Header = ({setTasks}) => {
    return (
        <div className='my-6 text-center'>
            <h1>Task: 0</h1>
            <TaskForm setTasks={setTasks}></TaskForm>

        </div>
    );
};

export default Header;
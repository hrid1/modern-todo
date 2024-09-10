import React from 'react';
import TaskForm from '../TaskForm/TaskForm';

const Header = () => {
    return (
        <div className='my-6 text-center'>
            <h1>Task: 0</h1>
            <TaskForm></TaskForm>

        </div>
    );
};

export default Header;
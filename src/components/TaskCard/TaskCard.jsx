import React from 'react';
import Tag from '../Tag/Tag';
import deleteIcon from '../../assets/delete.png'

const TaskCard = () => {
    return (
        <div className='border shadow-md p-2.5 rounded-md space-y-4'>
            <p>This is Sample Text.</p>
            <section className='flex items-center justify-between'>
            <div className="tag-div flex gap-2">
            <Tag tagName="HTML"></Tag>
            <Tag tagName="CSS"></Tag>
            </div>
            <button className="task-delete opacity-60 hover:opacity-100">
                <img className='w-6' src={deleteIcon} alt="" />
            </button>
            </section>

        </div>
    );
};

export default TaskCard;
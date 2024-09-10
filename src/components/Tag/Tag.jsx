import React from 'react';

const Tag = ({tagName}) => {
    return (
        <div>
            <button className='btn px-1 rounded-[4px]  border'>{tagName}</button>
        </div>
    );
};

export default Tag;
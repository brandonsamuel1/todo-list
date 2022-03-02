import React from 'react';
import { BsTrash } from 'react-icons/bs';

function TodoItem({ id, todo, onChecked }) {
    return (
        <div>
            <li>{todo} <span className='trash' onClick={() => onChecked(id)}><BsTrash /></span></li>
        </div>
    )
}

export default TodoItem;
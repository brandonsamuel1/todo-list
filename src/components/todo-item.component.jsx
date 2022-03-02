import React from 'react';

function TodoItem({ id, todo, onChecked }) {
    return (
        <div onClick={() => {
            onChecked(id)
        }}>
            <li>{todo}</li>
        </div>
    )
}

export default TodoItem;
import React from 'react';
import './todo.module.css'

const Todo = ({todo}) => {
    return (
        <div className="todos">
            <p>{todo}</p>
        </div>
    );
}

export default Todo;
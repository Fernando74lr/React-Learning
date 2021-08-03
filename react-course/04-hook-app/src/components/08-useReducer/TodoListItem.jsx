
import React from 'react';

const TodoListItem = ({ task, index, onHandleToggle, onHandleDelete }) => {
    return (
        <li
            key={ task.id }
            className="list-group-item">
            <p
                className={ `${task.done && 'complete'}` }
                onClick={ () => onHandleToggle(task.id) }
            >
                { index + 1}. { task.desc }
            </p>
            <button
                className="btn btn-danger"
                onClick={ () => onHandleDelete(task.id) }
            >
                Delete
            </button>
        </li>
    );
}

export default TodoListItem;

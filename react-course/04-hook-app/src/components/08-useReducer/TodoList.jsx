
import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onHandleToggle, onHandleDelete }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((task, i) => (
                    <TodoListItem
                        key={ task.id }
                        task={ task }
                        index={ i }
                        onHandleToggle={ onHandleToggle }
                        onHandleDelete={ onHandleDelete }
                    />
                ))
            }
        </ul>
    );
}

export default TodoList;

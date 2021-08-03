import React, { useReducer, useEffect } from 'react';
import './styles.css';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
    // Returns the initial state
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Learn React',
    //     done: false
    // }];

    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));;
    }, [todos]);

    const handleDelete = (id) => {
        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action);
    }

    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        });
    }

    const handleAddTodo = (newTask) => {
        dispatch({
            type: 'add',
            payload: newTask
        });
    }
    
    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos }
                        onHandleToggle={ handleToggle }
                        onHandleDelete={ handleDelete }
                    />
                </div>
                <div className="col-5">
                    <TodoAdd
                        onHandleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}

export default TodoApp;

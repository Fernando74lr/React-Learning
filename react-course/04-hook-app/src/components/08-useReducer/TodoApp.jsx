import React, { useReducer, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import './styles.css';
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
    
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));;
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

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
                    <h4>Add To Do</h4>
                    <hr />
                    
                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Learn..."
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />
                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoApp;

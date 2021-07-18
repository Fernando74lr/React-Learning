import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
}];

const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);
    console.log('~ todos', todos);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: 'New task',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
    }
    
    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((task, i) => (
                                <li
                                    key={ task.id }
                                    className="list-group-item">
                                    <p className="text-center">
                                        { i + 1}. { task.desc }
                                    </p>
                                    <button className="btn btn-danger">
                                        Delete
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
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

import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
}];

const TodoApp = () => {

    const [ todos ] = useReducer(todoReducer, initialState);
    console.log('~ todos', todos);
    
    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>Hola Mundo</li>
                <li>Qué hay</li>
            </ul>
        </div>
    )
}

export default TodoApp;

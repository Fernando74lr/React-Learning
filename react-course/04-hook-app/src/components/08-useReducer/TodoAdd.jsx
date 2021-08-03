import React from 'react'
import useForm from '../../hooks/useForm';

const TodoAdd = ({ onHandleAddTodo }) => {
    
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        
        onHandleAddTodo(newTodo);
        reset();
    }

    return (
        <>
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
        </>
    )
}

export default TodoAdd

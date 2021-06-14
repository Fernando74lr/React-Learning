import PropTypes from 'prop-types'
import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2) {
            setCategories(cat => [inputValue, ...cat]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit= { handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="Search your favourite gif!"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory

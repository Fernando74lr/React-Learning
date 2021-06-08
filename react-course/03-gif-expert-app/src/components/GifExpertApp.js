
import React, { useState } from 'react'
import AddCategory from './AddCategory';

const GifExpertApp = () => {

    // const categories = ['Friends', 'Dr. House', 'Dexter'];
    const [categories, setCategories] = useState([
        'Friends',
        'Dr. House',
        'Dexter'
    ]);

    // const handleAdd = (newSerie) => {
    //     setCategories(cat => [...cat, newSerie]);
    // }

    return (
        <>
           <h2>GifExpertApp</h2>
           <AddCategory />
           <hr />
           {/* <button onClick={ () => handleAdd('The Simpsons') }>Add serie</button> */}
           <ol>
               {
                   categories.map(cat => {
                        return <li key={cat}>{cat}</li>
                   })
               }
           </ol>
        </>
    )
}

export default GifExpertApp;

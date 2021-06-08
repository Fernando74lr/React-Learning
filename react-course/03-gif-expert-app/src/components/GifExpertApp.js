
import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dr. House']);

    return (
        <>
           <h2>GifExpertApp</h2>
           <AddCategory setCategories={ setCategories } />
           <hr />
           <ol>
               {
                   categories.map(cat =>( 
                        <GifGrid
                            key={ cat }
                            category={ cat }
                        />
                   ))
               }
           </ol>
        </>
    )
}

export default GifExpertApp;


import React, { useEffect }from 'react';

const GifGrid = ({ category }) => {

    /*
        This means I want to execute whatever
        is inside only the first time
        this component is rendered.
    */
    useEffect( () => {
        getGifs();
    }, []);

    const getGifs = async() => {

        const url = `http://api.giphy.com/v1/gifs/search?q=Dr. House&limit=10&api_key=iPlnzzkiQMdEmc7mA81SQAqz53frGnAQ`;
        const response = await fetch(url);
        const {data} = await response.json();
        const gifs = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        })
        console.log('~ gifs', gifs);
        
    }

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}

export default GifGrid;

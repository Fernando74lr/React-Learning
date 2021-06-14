

export const getGifs = async(category) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=iPlnzzkiQMdEmc7mA81SQAqz53frGnAQ`;
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

   return gifs;
}
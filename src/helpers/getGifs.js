


export const getGif = async(category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${  encodeURI( category )  }&api_key=KbzG6hIbDArfICwIlb9bMOsqxE6JySIN&limit=10`;
    
    const resp = await fetch( url );

    const { data } = await resp.json();

    const gifs = data.map(( img ) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    //console.log(data);
    return gifs;

}
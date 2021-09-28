import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const [images, setimages] = useState([]);

    useEffect( () => {
        getGif();
    },[]);

    const getGif = async() => {
        
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=KbzG6hIbDArfICwIlb9bMOsqxE6JySIN&limit=10`;
        
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

        setimages(gifs,...images);

    }


    return (
        <div>
           <h3>{ category }</h3> 
         

                {
                    images.map( ( image ) => {
                        return <GifGridItem 
                                    key={image.id}
                                    { ...image }
                                />
                    })
                }

           
        </div>
    )
}

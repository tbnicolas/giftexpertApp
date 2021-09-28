import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const [images, setimages] = useState([]);

    useEffect( () => {
        getGif( category )
            .then( (imgs) =>  setimages(imgs) );
    },[ category ]);

    


    return (
        <>
            <h3>{ category }</h3>  
            <div className="card-grid">
             
    
                    {
                        images.map( ( image ) => {
                            return <GifGridItem 
                                        key={image.id}
                                        { ...image }
                                    />
                        })
                    }
    
               
            </div>
        </>
    )
}

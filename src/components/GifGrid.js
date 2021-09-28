import React from 'react'
import ReactLoading from 'react-loading';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {



    const { data:images , loading } = useFetchGifs( category );



    return (
        <>

            {
                loading 
                ?( 
                    <div className="circular-indicator" >
                        <ReactLoading type={'spinningBubbles'} color={'#61dafb'} height={50} width={50} /> 
                    </div>
                )
                :(
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
            
        </>
    )
}

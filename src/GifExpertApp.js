
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GiftExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setcategories] = useState( ['Super Campeones'] );

    /* const handleAdd = () => {
        //setcategories([...categories,'HunterXHunter']);
        setcategories( cats => [...cats, 'HunterXHunter']);
    } */

    return (
        <>
            <h2>Gift Expert App</h2>
            <hr/>
            
            <AddCategory setcategories={ setcategories } />

            <ol>
                {
                    categories.map( ( category, index ) =>  {
                        return <GifGrid
                                 key={category}
                                 category={category} 
                               />
                    })
                }
            </ol>
        </>
    );
}

export {
    GiftExpertApp
}
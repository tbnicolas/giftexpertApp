
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';


const GiftExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setcategories] = useState( ['One Punch', 'Samurai X', 'Dragon Ball'] );

    /* const handleAdd = () => {
        //setcategories([...categories,'HunterXHunter']);
        setcategories( cats => [...cats, 'HunterXHunter']);
    } */

    return (
        <>
            <h2>Gift Expert App</h2>
            <hr/>
            
            <AddCategory />

            <ol>
                {
                    categories.map( ( category, index ) =>  {
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>
        </>
    );
}

export {
    GiftExpertApp
}
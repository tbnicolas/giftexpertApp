
import React, { useState } from 'react';


const GiftExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setcategories] = useState( ['One Punch', 'Samurai X', 'Dragon Ball'] );

    const handleAdd = () => {
        setcategories([...categories,'HunterXHunter']);
    }

    return (
        <>
            <h2>Gift Expert App</h2>
            <hr/>
            
            <button onClick={ handleAdd }>Agregar</button>

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
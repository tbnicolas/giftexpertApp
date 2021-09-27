
import React from 'react';


const GiftExpertApp = () => {

    const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    return (
        <>
            <h2>Gift Expert App</h2>
            <hr/>

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
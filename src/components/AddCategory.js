import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Hola Mundo');


    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log('Submit Hecho');
    }

    return (
        //En caso de colocar una clase dejar el div sino quitarlo
       
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
        
    )
}

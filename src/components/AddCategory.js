import React, { useState } from "react";
import PropTypes from 'prop-types'

//recibimos setCategories
export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState( '' )

    const handleInputValue = (e) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        //prevenir el comportamiento por defecto del submit
        e.preventDefault()
        //console.log('Submit Hecho');
        //validación submit
        if( inputValue.trim().length > 2) {
            setCategories( cats => [...cats, inputValue] )
            setInputValue('')
        }     
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputValue }
                placeholder="Agrega un héroe"
            />
        </ form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
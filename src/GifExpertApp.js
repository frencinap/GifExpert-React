import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"
import { ScrollButton } from "./components/ScrollButton"

// vamos a agregar una categoría nueva para trabajarla en el testsuite
//agregaremos defaultcategories en vez de un string vacío
export const GifExpertApp = ( { defaultCategories = [] } ) => {

    const [ categories, setCategories ] = useState( defaultCategories )

    return (
        <>
            <h2> GifExpert App</h2> 
            <AddCategory setCategories={ setCategories } />
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            category={category}
                            key={category}
                        />
                    ))
                }    
            </ol>
            <ScrollButton/>
        </>
    )
}
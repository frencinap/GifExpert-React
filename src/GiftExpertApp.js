import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"
import { ScrollButton } from "./components/ScrollButton"

export const GiftExpertApp = () => {

    const [ categories, setCategories ] = useState([''])

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
            <ScrollButton />    
        </>
    )
}
import React from 'react'

export const GifGrid = ({ category }) => {

    const getGif = async() =>{
        
        const url = 'https://api.giphy.com/v1/gifs/search?q=Avengers&limit=10&api_key=kQ50E0uTSpq7EGd7Nau8q6hA3EgxiN1P'
        const resp = await fetch( url )
        const { data } = await resp.json()

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        console.log(gifs);
    }

    getGif()
    return (
        <div>
            <h3> { category } </h3>
        </div>
    )
}

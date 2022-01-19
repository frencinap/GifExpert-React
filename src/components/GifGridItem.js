import React from 'react'

//desestructuradas gracias al spreaoperator de GifGrid
export const GifGridItem = ( {id, title, url} ) => {

    console.log( id, title, url );
    return (
        <div className='card animate__animated animate__backInUp'>
            <img src={ url } alt={title} />
            <p>{ title }</p>
        </div>
    )
}

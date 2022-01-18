import React from 'react'

//desestructuradas gracias al spreaoperator de GifGrid
export const GifGridItem = ( {id, title, url} ) => {

    console.log( id, title, url );
    return (
        <div className='card'>
            <img src={ url } alt={title} />
            <p>{ title } </p>
        </div>
    )
}

import React from 'react'
import PropTypes from 'prop-types';

//desestructuradas gracias al spreadperator de GifGrid
export const GifGridItem = ( {id, title, url} ) => {

    console.log( id, title, url );
    return (
        <div className='card animate__animated animate__backInUp'>
            <img src={ url } alt={title} />
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired

}
// eliminamos useState y useEffect
import React from 'react'
//custom Hook
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3> { category } </h3>
            { loading && 
            <p className='animate__animated animate__flash animate__repeat-2'>Loading</p>}
            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem
                            key={ img.id }
                            { ...img } />
                        ))
                    }
            </div>
        </>
    )
}

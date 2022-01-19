//los hooks pueden tener su propio estado
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    //los efectos no son async pero puedo usar .then dentro de su argumento
    useEffect(()=> {
        getGifs( category )
            .then( imgs =>  {

                    setState({
                        data: imgs,
                        loading: false
                    })
          
            })
    }, [ category ])



    return state
}
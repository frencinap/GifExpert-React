// biblioteca para hooks( revisar package.json )
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Pruebas en custom hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } =  renderHook( ()=> useFetchGifs( 'Deku' ) )
        // parametros del hook, current= valor actual del hook
        const { data, loading } = result.current
        //console.log(data, loading); // [] true
        await waitForNextUpdate()

        expect( data ).toEqual([])
        expect( loading ).toBe(true)
        
    });

    test('Retornar un arreglo de imgs y loading en false', async() => {

        const { result, waitForNextUpdate } =  renderHook( ()=> useFetchGifs( 'Deku' ) )
        await waitForNextUpdate()
        const { data, loading } = result.current
        expect( data.length ).toEqual(12)
        expect( loading ).toBe(false)
        
    });
    
});
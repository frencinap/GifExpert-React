import { shallow } from "enzyme";
import React from "react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs} from '../../hooks/useFetchGifs'
// mock del hook
jest.mock('../../hooks/useFetchGifs')
 

describe('Pruebas en GifGrid component', () => {

    const category = 'Una categoria de ejemplo'
    //const wrapper = shallow( <GifGrid category={category}/> )

    test('Hacer match con el snapshot', () => {

        useFetchGifs.mockReturnValue({
            //estado incial del hook
            data: [],
            loading: true
        })
        const wrapper = shallow( <GifGrid category={category}/> )
        expect( wrapper ).toMatchSnapshot()
        
    });

    test('Debe de mostrar los items cuando se cargan imagenes con useFetch', () => {

        //mock del useFetchGifs, solo importamos el useFetchGifs
        const gifs = [{
            id: 'abcdef',
            url: 'www.panini.com/chupeteSuazo',
            title:'El Hombre del planeta gol'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        })
        const wrapper = shallow( <GifGrid category={category}/> )
        //expect( wrapper ).toMatchSnapshot()
        // al haber info el parrafo loading no debería mostrarse
        expect( wrapper.find('p').exists() ).toBe(false)
        //analizar que se muestre GifGridItem y el length de este sea igual a de gifs
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
    
    });
    
});
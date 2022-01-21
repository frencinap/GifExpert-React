import React from "react"
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en GifGridItem', () => {

    const title = 'Un titulo'
    const url = 'https://localhost/testsuite.jpg'
    //como vamos a usar wl wrapper en todas nuestras pruebas lo dejamos aca y solo llamamos su nombre en las pruebas
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/>)
    
    //actualizamos el snapshot para las props title y url( apretamos la tecla u )
    test('hacer match con el snapshot', () => {
        
        expect( wrapper ).toMatchSnapshot()
        
    });

    test('debe tener un parrafo con el title', () => {
       
        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe( title )

    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img')
        //console.log( img.props() );
        expect( img.prop('src') ).toBe( url )
        expect( img.prop('alt') ).toBe( title )

    });

    test('el div debe tener animate__backInUp', () => {

        const div = wrapper.find('div')
        const className = div.prop('className')
        expect( className.includes('animate__backInUp')).toBe(true)
         
    });
});
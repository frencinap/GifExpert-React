import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas en <GifExpertApp /> ', () => {
    
    test('Hacer match con el snapshot', () => {

        const wrapper = shallow( <GifExpertApp/>)  
        expect( wrapper ).toMatchSnapshot()
        
    });

    test('Debe de mostrar una lista de categorías', () => {

        const categories = [' Eren ', ' Batman ']
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/>)
        // en este caso deberian haber 2 GifGrids con las categoires definidas arriba
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )  
        
    });
});
import React from "react";
import { shallow } from "enzyme"
import { AddCategory } from '../../components/AddCategory'
import '@testing-library/jest-dom'


describe('pruebas en el componente AddCategory', () => {

    //funcion vacia para simular setCategories
    const setCategories = jest.fn()
    let wrapper = shallow( < AddCategory setCategories={ setCategories } />)

    //limpiamos los campos antes de cada prueba
    beforeEach(()=>{
        jest.clearAllMocks()
        wrapper = shallow( < AddCategory setCategories={ setCategories } />)
    })

    test('debe hacer el match con el snapshot', () => {
        
        expect( wrapper ).toMatchSnapshot()
        
    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input')
        const value = 'Hola mundo'
        //los eventos onAlgo se simulan si el on( en este caso onChange)
        input.simulate('change', { target: { value } } )
        
    });

    test('No debe de postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        //como el submit está vacio setCategories no debe ser llamado
        expect( setCategories ).not.toHaveBeenCalled()

    });

    test('Se debe llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola tarola'
        //simular inputChange
        wrapper.find('input').simulate('change', { target: { value }})
        //simluacion submit
        wrapper.find('form').simulate('submit', { preventDefault(){} } )
        //setCategories fue llamado
        expect( setCategories ).toHaveBeenCalled()
        //fue llamado con una función
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) )
        //el valor del input debe quedar vacío
        expect( wrapper.find('input').prop('value')).toBe('')
  
    });
    
});
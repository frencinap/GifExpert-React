import { getGifs } from "../../helpers/getGifs";


describe('Pruebas en helper getGifs', () => {

    test('debe de traer 12 elementos', async () => {

        const gifs = await getGifs('One Punch')
        expect( gifs.length ).toBe( 12 ) 
        
    });

    test('debe de traer 0 elementos si no hay argumentos', async () => {

        const gifs = await getGifs('')
        expect( gifs.length ).toBe( 0 ) 
        
    });
    
});
import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Tests in 05-funciones.js', () => {
    
    test('should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }; 

        const user = getUser();
        expect(user).toEqual(userTest);

    });

    test('should return an object', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'Fernando74lr'
        }; 

        const user = getUsuarioActivo('Fernando74lr');
        expect(user).toEqual(userTest);

    });
    

});

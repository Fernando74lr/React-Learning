import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Tests in 09-promesas.js', () => {
    
    test('should return a heroe getHeroeByIdAsync', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then(h => {
                expect(h).toBe(heroes[0]);
                done();
            });
    });

    test('should return an error if the heroe by id doesn\'nt exist', (done) => {
        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });  

});

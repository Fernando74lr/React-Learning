import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Tests in 08-imp-exp.js', () => {
    
    test('should return a heroe by id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('should return a undefined if heroe doesn\'t exist', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('should return an array of DC heroes', () => {
        const owner = 'DC';
        const dcHeroes = getHeroesByOwner(owner);
        const dcHeroesData = heroes.filter( h => h.owner === owner);
        expect(dcHeroes).toEqual(dcHeroesData);
    });
   
    test('should return an array of Marvel heroes (2)', () => {
        const owner = 'Marvel';
        const marvelHeroes = getHeroesByOwner(owner);
        expect(marvelHeroes.length).toBe(2);
    });

});

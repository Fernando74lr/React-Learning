import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Tests in 02-template-string.test.js', () => {

    test('Should return "Hola, Fernando"', () => {
        const name = 'Fernando';

        const greeting = getSaludo(name);

        expect(greeting).toBe('Hola, ' + name);
    });

    test('Should return "Hola, Carlos" if there\'s no argument name', () => {
        const name = 'Carlos';

        const greeting = getSaludo();

        expect(greeting).toBe('Hola, ' + name);
    });
    
});

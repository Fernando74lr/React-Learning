
describe('Tests in the demo.test.js file', () => {
    test('both strings should be equal', () => {
        // 1. Initialization
        const msg2 = 'Hey!';
        
        // 2. Stimulus
        const msg = 'Hey';
    
        // 4. Observe behavior
        expect(msg).toBe(msg2); // ===
    });
});

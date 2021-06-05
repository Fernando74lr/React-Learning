

test('should', () => {
    const isActive = true;

    if (isActive) {
        throw new Error('It is not active');
    }
})

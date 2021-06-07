import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";
import React from 'react';

describe('Tests in <FirstApp />', () => {
    test('should show the message: "I\'m Fernando"', () => {
        const greeting = 'I\'m Fernando';

        const { getByText} = render(<FirstApp greeting={greeting} />);

        expect(getByText(greeting)).toBeInTheDocument();
    })
    
});

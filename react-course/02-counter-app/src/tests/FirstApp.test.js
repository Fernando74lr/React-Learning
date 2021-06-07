// import { render } from "@testing-library/react";
// import React from 'react';
import FirstApp from "../FirstApp";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Tests in <FirstApp />', () => {
    // test('should show the message: "I\'m Fernando"', () => {
    //     const greeting = 'I\'m Fernando';

    //     const { getByText} = render(<FirstApp greeting={greeting} />);

    //     expect(getByText(greeting)).toBeInTheDocument();
    // });

    test('should show <FirstApp /> correctly', () => {
        const greeting = 'I\'m Fernando';
        const wrapper = shallow(<FirstApp greeting={greeting} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show subtitle sent by props', () => {
        const greeting = 'I\'m Fernando';
        const subtitle = 'This is a subtitle';

        const wrapper = shallow(
            <FirstApp 
                greeting={greeting}
                subtitle={subtitle}
            />
        );

        const textPara = wrapper.find('p').text();
        console.log(textPara);

        expect(textPara).toBe(subtitle);
    });   
    
});

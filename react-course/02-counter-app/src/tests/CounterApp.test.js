import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Tests in <CounterApp />', () => {
    test('should show <CounterApp /> correctly', () => {
        const value = 50;
        const wrapper = shallow(<CounterApp value={value} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show subtitle sent by props', () => {
        const value = 100;

        const wrapper = shallow(
            <CounterApp 
                value={value}
            />
        );

        const textPara = wrapper.find('h2').text().trim();

        expect(textPara.replace(' ', '')).toBe(value.toString());
    });   
    
});

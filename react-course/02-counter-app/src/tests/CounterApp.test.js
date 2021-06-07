import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Tests in <CounterApp />', () => {

    const wrapper = shallow(<CounterApp />);

    test('should show <CounterApp /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show subtitle sent by props', () => {
        const value = 100;

        const wrapper = shallow( <CounterApp value={value} />);

        const textPara = wrapper.find('h2').text().trim();

        expect(textPara).toBe(value.toString());
    });

    test('should increment counter in 1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('1');

    });

    test('should decrement counter in 1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('0');

    });

    test('should put the default value with the btn reset', () => {
        const wrapper = shallow(<CounterApp value={ 50 } />);
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('50');

    })
    
    
});

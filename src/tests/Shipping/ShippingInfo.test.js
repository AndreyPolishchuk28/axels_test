import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { Shipping } from '../../components';
import { store } from '../../redux/store';
import { act } from 'react-dom/test-utils';

describe('Shipping', () => {
    it('should render Shipping component', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <Shipping />
                </Router>
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('button continue shippingInfo', () => {
        const component = mount(
            <Provider store={store}>
                <Router>
                    <Shipping />
                </Router>
            </Provider>
        );
        const handleBtn = component.find('button').props();
        const somethingSpy = jest.spyOn(handleBtn, 'onClick');
        act(() => handleBtn.onClick());
        expect(somethingSpy).toHaveBeenCalledTimes(1);
    });

    it('correct inputs data', () => {
        const component = mount(
            <Provider store={store}>
                <Router>
                    <Shipping />
                </Router>
            </Provider>
        );

        let dayTimePhone = component.find('input').at(1);
        dayTimePhone.simulate('change', {target: {name: 'dayTimePhone', value: 12} });
        dayTimePhone = component.find('input').at(1);
        expect(dayTimePhone.props().value).toBe(12);
    })
});

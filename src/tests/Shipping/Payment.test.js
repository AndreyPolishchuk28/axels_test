import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { Payment } from '../../components/Shipping/Payment';
import { store } from '../../redux/store';
import { act } from 'react-dom/test-utils';

describe('Payment', () => {
    it('should render Payment component', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <Payment />
                </Router>
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('button continue payment', () => {
        const component = mount(
            <Provider store={store}>
                <Router>
                    <Payment />
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
                    <Payment />
                </Router>
            </Provider>
        );

        let cardHolderName = component.find('input').at(0);
        let cardNumber = component.find('input').at(1);
        let expireDate = component.find('input').at(2);
        let securityCode = component.find('input').at(3);

        cardHolderName.simulate('change', {target: {name: 'cardHolderName', value: 'test'} });
        cardNumber.simulate('change', {target: {name: 'cardNumber', value: 'test'} });
        expireDate.simulate('change', {target: {name: 'expireDate', value: 'test'} });
        securityCode.simulate('change', {target: {name: 'securityCode', value: 'test'} });

        cardHolderName = component.find('input').at(0);
        cardNumber = component.find('input').at(1);
        expireDate = component.find('input').at(2);
        securityCode = component.find('input').at(3);

        expect(cardHolderName.props().value).toBe('test');
        expect(cardNumber.props().value).toBe('test');
        expect(expireDate.props().value).toBe('test');
        expect(securityCode.props().value).toBe('test');
    });
});

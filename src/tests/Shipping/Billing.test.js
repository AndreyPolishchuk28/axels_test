import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { Billing } from '../../components';
import { store } from '../../redux/store';
import { act } from 'react-dom/test-utils';

describe('Billing', () => {
    it('should render Billing component', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <Billing />
                </Router>
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('button continue billing', () => {
        const component = mount(
            <Provider store={store}>
                <Router>
                    <Billing />
                </Router>
            </Provider>
            );
        const handleBtn = component.find('button').props();
        const somethingSpy = jest.spyOn(handleBtn, 'onClick');
        act(() => handleBtn.onClick());
        expect(somethingSpy).toHaveBeenCalledTimes(1);
    });

    it('input onChange callbacks', () => {
        const component = mount(
            <Provider store={store}>
                <Router>
                    <Billing />
                </Router>
            </Provider>
        );

        const handleInput = component.find('input').at(0).props();
        const spy = jest.spyOn(handleInput, 'onChange');
        act(() => handleInput.onChange({target: {name: 'fullName', value: 'test'}}));
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('correct inputs data', () => {
        const component = mount(
            <Provider store={store}>
                <Router>
                    <Billing />
                </Router>
            </Provider>
        );

        let fullName = component.find('input').at(0);
        let email = component.find('input').at(1);
        let streetAddress = component.find('input').at(2);
        let apt = component.find('input').at(3);
        let city = component.find('input').at(4);
        let zip = component.find('input').at(5);
        let select = component.find('select');

        fullName.simulate('change', {target: {name: 'fullName', value: 'test'}});
        email.simulate('change', {target: {name: 'email', value: 'test'}});
        streetAddress.simulate('change', {target: {name: 'streetAddress', value: 'test'}});
        apt.simulate('change', {target: {name: 'apt', value: 'test'}});
        city.simulate('change', {target: {name: 'city', value: 'test'}});
        zip.simulate('change', {target: {name: 'zip', value: 'test'}});
        select.simulate('change', {target: {name: 'country', value: 'Usa'}});

        fullName = component.find('input').at(0);
        email = component.find('input').at(1);
        streetAddress = component.find('input').at(2);
        apt = component.find('input').at(3);
        city = component.find('input').at(4);
        zip = component.find('input').at(5);
        select = component.find('select');

        expect(fullName.props().value).toBe('test');
        expect(email.props().value).toBe('test');
        expect(streetAddress.props().value).toBe('test');
        expect(apt.props().value).toBe('test');
        expect(city.props().value).toBe('test');
        expect(zip.props().value).toBe('test');
        expect(select.props().value).toBe('Usa');
    })
});

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { Payment } from '../../components/Shipping/Payment';
import { store } from '../../redux/store';

describe("Payment", () => {
    it("should render Payment component", () => {
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
});

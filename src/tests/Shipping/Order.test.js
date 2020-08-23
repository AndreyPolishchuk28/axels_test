import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { Order } from '../../components/Shipping/Order';
import { store } from '../../redux/store';

describe("Order", () => {
    it("should render Order component", () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <Order />
                </Router>
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

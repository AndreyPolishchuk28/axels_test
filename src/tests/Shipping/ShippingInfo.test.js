import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from 'react-test-renderer'
import { Provider } from "react-redux";

import { Shipping } from "../../components";
import { store } from "../../redux/reducers";

describe("Shipping", () => {
    it("should render Shipping component", () => {
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
});





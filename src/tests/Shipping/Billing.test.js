import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from 'react-test-renderer'
import { Provider } from "react-redux";

import { Billing } from "../../components";
import { store } from "../../redux/reducers";

describe("Billing", () => {
    it("should render Billing component", () => {
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
});

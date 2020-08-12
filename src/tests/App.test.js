import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import { store } from '../redux/reducers';
import renderer from "react-test-renderer";


describe("App", () => {
    it("should render App component", () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});


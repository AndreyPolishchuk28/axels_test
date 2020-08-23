import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { ThanksPage } from '../../components';
import { store } from '../../redux/store';

describe('ThanksPage', () => {
    it('should render ThanksPage component', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <ThanksPage />
                </Router>
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from '../ducks/products';
import { productsReducer } from '../ducks/products';

const sagaMiddleware = createSagaMiddleware();

const saveToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
};
const persistedState = loadFromLocalStorage();

export const store = createStore(combineReducers({
    products: productsReducer
}), persistedState, applyMiddleware(sagaMiddleware));

store.subscribe(() => saveToLocalStorage(store.getState()));
sagaMiddleware.run(rootSaga);

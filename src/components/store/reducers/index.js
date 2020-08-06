import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {getProductsSaga} from "../action";
import {SET_PRODUCTS} from "../action";
import {all} from 'redux-saga/effects'

const initialState = {
    products: []
};

const productsReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_PRODUCTS:{
            return{
                ...state,
                products: payload
            }
        }
        default: return state
    }
};

function* rootSaga() {
    yield all([
        getProductsSaga()
    ])
}

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    product: productsReducer
});

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);






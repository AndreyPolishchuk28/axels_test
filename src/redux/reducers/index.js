import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import {getProductsSaga, shippingInfoSaga} from "../action";
import {SET_PRODUCTS, SHIPPING_INFO} from "../action";
import {all} from 'redux-saga/effects'

const initialState = {
    product: [],
    userAddress: []
};

const productsReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_PRODUCTS:{
            return{
                ...state,
                product: payload
            }
        }
        case SHIPPING_INFO: {
            return {
                ...state,
                userAddress: [...state.userAddress, payload]
            }
        }
        default: return state
    }
};

function* rootSaga() {
    yield all([
        getProductsSaga(),
        shippingInfoSaga()
    ])
}

const sagaMiddleware = createSagaMiddleware();


function saveToLocalStorage(state) {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) return undefined;
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e);
        return undefined
    }
}
const persistedState = loadFromLocalStorage();


// const reducer = combineReducers({
//     products: productsReducer
// });

export const store = createStore(combineReducers({
    products: productsReducer
}), persistedState, applyMiddleware(sagaMiddleware));

store.subscribe(() => saveToLocalStorage(store.getState()));
sagaMiddleware.run(rootSaga);






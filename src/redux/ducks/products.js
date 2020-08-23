import { put, take, all } from 'redux-saga/effects';

export const GET_PRODUCTS = 'GET_PRODUCTS';
const SET_PRODUCTS = 'SET_PRODUCTS';
export const SHIPPING_INFO = 'SHIPPING_INFO';

const server = 'https://demo3830727.mockable.io';
const urlProducts = `${server}/products`;
const urlInfo = `${server}/info`;

export const getProducts = (payload) => ({
    type: GET_PRODUCTS,
    payload: payload
});

export const shippingInfo = (payload) => ({
    type: SHIPPING_INFO,
    payload: payload
});

export const initialState = {
    product: [],
    userAddress: []
};

export const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_PRODUCTS:
            return{...state, product: payload};

        case SHIPPING_INFO:
            return {...state, userAddress: [...state.userAddress, payload]};

        default: return state
    }
};

//Saga
function* getProductsSaga() {
    while (true) {
        try {
            yield take(GET_PRODUCTS);
            const req = yield fetch(urlProducts);
            const res = yield req.json();
            yield put({
                type: SET_PRODUCTS,
                payload: res
            })
        } catch (e) {
            console.log(e);
        }
    }
}

function* shippingInfoSaga() {
    while (true) {
        try {
            const { payload } = yield take(SHIPPING_INFO);
            const response = yield fetch(urlInfo, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            console.log(response.status);
        } catch (e) {
            console.log(e);
        }
    }
}

export function* rootSaga() {
    yield all([
        getProductsSaga(),
        shippingInfoSaga()
    ]);
}

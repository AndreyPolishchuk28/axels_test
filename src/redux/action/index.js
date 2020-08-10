import {put, take} from 'redux-saga/effects'

const GET_PRODUCTS ='GET_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SHIPPING_INFO = 'SHIPPING_INFO';

export const getProducts = (payload) =>{
    return{
        type: GET_PRODUCTS,
        payload: payload
    }
};

export const shippingInfo = (payload) =>{
    return{
        type: SHIPPING_INFO,
        payload: payload
    }
};

export function* getProductsSaga() {
    while (true){
        try {
            yield take(GET_PRODUCTS);
            const req = yield fetch('https://demo3830727.mockable.io/products');
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

export function* shippingInfoSaga() {
    while (true){
        try {
            const {payload} = yield take(SHIPPING_INFO);
            const response = yield fetch('https://demo3830727.mockable.io/info', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }
        );
            console.log(response.status);
        } catch (e) {
            console.log(e);
        }
    }
}



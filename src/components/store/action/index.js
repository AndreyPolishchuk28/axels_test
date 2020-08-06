import {put, take, all} from 'redux-saga/effects'

const GET_PRODUCTS ='GET_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const getProducts = (payload) =>{
    return{
        type: GET_PRODUCTS,
        payload: payload
    }
};

export function* getProductsSaga() {
    while (true){
        try {
            yield take(GET_PRODUCTS);
            const req = yield fetch('https://demo3830727.mockable.io/products');
            const res = yield req.json();
            console.log(res);
            yield put({
                type:SET_PRODUCTS,
                payload: res
            })
        } catch (e) {
            console.log(e);
        }
    }
}



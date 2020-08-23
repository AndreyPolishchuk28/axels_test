import {
    getProducts,
    shippingInfo,
    productsReducer,
    SHIPPING_INFO,
    GET_PRODUCTS,
    initialState
} from '../../redux/ducks/products';

describe('ducks test', () => {
    let state = {
        "product": [],
        "userAddress": [],
    };

    it('productsReducer', () => {
        expect(productsReducer(undefined, {})).toEqual(initialState)
    });

    it('should test SET_PRODUCT', () => {
        const action = {
            type: GET_PRODUCTS,
            payload: state
        };
        expect(productsReducer(initialState, action)).toEqual(state)
    });

    it('should test SHIPPING_INFO', () => {
        let action = shippingInfo({
            fullName: 'Maks',
            dayTimePhone: '0675232632',
            streetAddress: 'Valova 8',
            apt: '12',
            city: 'Kyiv',
            country: 'Ukraine',
            zip: '12032',
        });

        let newState = productsReducer(state, action);
        expect(newState.userAddress.length).toBe(1)
    })
});

describe('ducks action test', () => {
    it('should create fetch GET_PRODUCTS', () => {
        const payload = {response: 'res'};
        const expectedAction = {
            type: GET_PRODUCTS,
            payload
        };
        expect(getProducts(payload)).toEqual(expectedAction)
    });

    it('should create fetch SHIPPING_INFO', () => {
        const payload = {response: 'status'};
        const expectedAction = {
            type: SHIPPING_INFO,
            payload
        };
        expect(shippingInfo(payload)).toEqual(expectedAction)
    })
});

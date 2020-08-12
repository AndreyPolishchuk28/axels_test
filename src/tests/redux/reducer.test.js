import React from "react";
import { productsReducer } from "../../redux/reducers";
import { initialState } from "../../redux/reducers";
import { GET_PRODUCTS } from "../../redux/action";
import { shippingInfo } from "../../redux/action";

describe('reducer test', () => {
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

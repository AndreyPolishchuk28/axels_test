import { GET_PRODUCTS, SHIPPING_INFO } from "../../redux/ducks";
import { getProducts, shippingInfo } from "../../redux/ducks";

describe('redux unit test', () => {
    it('should create fetch GET_PRODUCTS', () =>{
        const payload = {response: 'res'};
        const expectedAction = {
            type: GET_PRODUCTS,
            payload
        };
        expect(getProducts(payload)).toEqual(expectedAction)
    });

    it('should create fetch SHIPPING_INFO', () =>{
        const payload = {response: 'status'};
        const expectedAction = {
            type: SHIPPING_INFO,
            payload
        };
        expect(shippingInfo(payload)).toEqual(expectedAction)
    })
});




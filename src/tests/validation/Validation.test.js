import { validations, paymentValidation } from '../../validation';

describe('validations', () => {
    it('shipping validations', () => {
        const mockCallback = jest.fn(() => 'Andrii');
        validations(mockCallback);
        expect(mockCallback.mock.calls).toEqual([]);
    });

    it('payment validations', () => {
        const mockCallback = jest.fn(() => 'Ok');
        paymentValidation(mockCallback);
        expect(mockCallback.mock.calls).toEqual([]);
    })
});

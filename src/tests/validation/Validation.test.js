import { validations, paymentValidation } from '../../validation';

describe('validations', () => {
    it('shipping validations', () => {
        const mockCallback = jest.fn(() => 'test');
        validations(mockCallback());
        expect(mockCallback.mock.results[0].value).toBe('test');
        expect(mockCallback.mock.calls.length).toBe(1);
    });

    it('payment validations', () => {
        const mockCallback = jest.fn(() => 'test');
        paymentValidation(mockCallback());
        expect(mockCallback.mock.results[0].value).toBe('test');
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

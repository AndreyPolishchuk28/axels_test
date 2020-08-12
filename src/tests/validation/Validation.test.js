import React from "react";
import { validations, paymentValidation } from "../../validation";

describe('validations', () => {
    it('shipping validations', () => {
        const mockCallback = jest.fn(() => 'Andrii');
        validations(mockCallback);
        expect(mockCallback.mock.calls).toEqual([]);
    });

    it('payment validations', () => {
        const mockCallback = jest.fn(() => 'ha');
        paymentValidation(mockCallback);
        expect(mockCallback.mock.calls).toEqual([]);
    })
});

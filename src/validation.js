export const validations = (values) => {
    let errors = {};

    if (!values.fullName) {
        errors.fullName = 'Please enter full name'
    }
    if (!values.dayTimePhone && !values.email) {
        errors.dayTimePhone = 'Please enter the phone';
        errors.email = 'Email address is required'
    }
    if (isNaN(values.dayTimePhone) && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.dayTimePhone = 'Incorrect number';
        errors.email = "Email address is invalid";
    }
    if (!values.streetAddress) {
        errors.streetAddress = 'Please enter street address'
    }
    if (!values.apt) {
        errors.apt = 'Please enter street address'
    }
    if (!values.city) {
        errors.city = 'Please enter the city'
    }
    if (!values.country) {
        errors.country = 'Please enter the country'
    }
    if (isNaN(values.zip)) {
        errors.zip = 'Wrong zip code'
    } else if (!values.zip) {
        errors.zip = 'Please enter the zip code'
    }

    return errors;
};

export const paymentValidation = (values) => {
    let errors = {};

    if (!values.cardHolderName) {
        errors.cardHolderName = 'Name is required'
    }
    if (!values.cardNumber) {
        errors.cardNumber = 'Wrong card number';
    } else if (isNaN(values.cardNumber)) {
        errors.cardNumber = 'Should be number'
    }
    if (!/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(values.expireDate)) {
        errors.expireDate = 'Incorrect date'
    }
    if (!values.securityCode) {
        errors.securityCode = 'Enter the code'
    } else if (isNaN(values.securityCode)) {
        errors.securityCode = 'Should be number'
    } else if (values.securityCode.length !== 3) {
        errors.securityCode = 'Wrong code'
    }

    return errors;
};

export const  check = (values, setErrors, props, route) => {
    let errors = validations(values);

    if (Object.keys(errors).length) {
        setErrors(validations(values));
    } else {
        props.shippingInfo({
            fullName: values.fullName,
            dayTimePhone: values.dayTimePhone,
            streetAddress: values.streetAddress,
            apt: values.apt,
            email: values.email,
            city: values.city,
            country: values.country,
            zip: values.zip,
        });
        props.history.push(`/${route}`)
    }
};

import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import { Container, Arrow, Title } from '../../styled/similarStyle';
import { Order } from './Order';
import { shippingInfo } from '../../redux/ducks/products';
import { check } from '../../validation';

const mapStateToProps = state => ({...state});

export const Shipping = connect (mapStateToProps, { shippingInfo })(props => {
    const [values, setValues] = useState({
        fullName: '',
        dayTimePhone: '',
        streetAddress: '',
        apt: '',
        city: '',
        country: '',
        zip: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = event => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    };

    return(
        <Container className='container-fluid'>
            <Row className='d-flex justify-content-center bg'>
                <Col className='bg-white wrapper-shipping-width' md={6} sm={8} xs={10}>
                    <Row>
                        <Col className='d-flex align-items-center shipping-wrapper'>
                            <span className='shipping-color'>Shipping</span>
                            <Arrow/>
                            <span>Billing</span>
                            <Arrow/>
                            <span>Payment</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-left'>
                            <Title>Shipping Info</Title>
                        </Col>
                    </Row>
                    <Form>
                        <Form.Group>
                            <Form.Label className='recipient mb-3'>Recipient</Form.Label>
                            <Form.Control name='fullName' type="text" placeholder="Full Name" value={values.fullName} onChange={handleChange}/>
                            {errors && <Form.Text className="errors">{errors.fullName}</Form.Text>}
                            <Row className='daytime'>
                                <Col md={8} sm={8} xs={8}>
                                    <Form.Control name='dayTimePhone' type="text" placeholder="Daytime Phone" value={values.dayTimePhone} onChange={handleChange} />
                                    {errors && <Form.Text className="errors">{errors.dayTimePhone}</Form.Text>}
                                </Col>
                                <Col>
                                    <Form.Text className="text-muted">
                                        For delivery quetions only
                                    </Form.Text>
                                </Col>
                            </Row>
                            <Form.Label className='recipient mb-0'>Address</Form.Label>
                            <Form.Control onChange={handleChange} name='streetAddress' className='indent' type="text" value={values.streetAddress} placeholder="Street Address" required/>
                            {errors && <Form.Text className="errors">{errors.streetAddress}</Form.Text>}
                            <Form.Control onChange={handleChange} name='apt' className='indent' type="text" value={values.apt} placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
                            {errors && <Form.Text className="errors">{errors.apt}</Form.Text>}
                            <Form.Control onChange={handleChange} name='city' value={values.city} className='indent' type="text" placeholder="City"/>
                            {errors && <Form.Text className="errors">{errors.city}</Form.Text>}
                            <Row>
                                <Col md={7} sm={7} xs={7}>
                                    <Form.Control value={values.country} name='country' onChange={handleChange} as="select">
                                        <option>Country</option>
                                        <option value='Usa'>USA</option>
                                        <option value='Italy'>Italy</option>
                                    </Form.Control>
                                    {errors && <Form.Text className="errors">{errors.country}</Form.Text>}
                                </Col>
                                <Col>
                                    <Form.Control onChange={handleChange} value={values.zip} name='zip' type="text" placeholder="ZIP"/>
                                    {errors && <Form.Text className="errors">{errors.zip}</Form.Text>}
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                    <Row>
                        <Col md={7} sm={7} xs={7}>
                            <Button onClick={() => check(values, setErrors, props, 'billing')} className='button-continue mb-4' variant="primary" type="button" block>Continue</Button>
                        </Col>
                    </Row>
                </Col>
                <Col className='grey wrapper-order-width' md={5} sm={8} xs={10}>
                    <Order/>
                </Col>
            </Row>
        </Container>
    )
});

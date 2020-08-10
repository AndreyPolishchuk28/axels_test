import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {connect} from "react-redux";
import styled from "styled-components";
import {Arrow, Title} from "../ShippingInfo/ShippingInfo";
import {Order} from "../Order/Order";
import {Container} from "../ShippingInfo/ShippingInfo";
import {shippingInfo} from "../../../redux/action";
import {validations} from "../../../validation";

const mapStateToProps = state =>{
    return{
        ...state
    }
};

export const Billing = connect (mapStateToProps, {shippingInfo})( props=>{
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        streetAddress: '',
        apt: '',
        city: '',
        country: '',
        zip: '',
    });

    const handleChange = event =>{
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    };

    const check = () =>{
        let errors = validations(values);
        if (Object.keys(errors).length){
            setErrors(validations(values));
        }else{
            props.shippingInfo({
                type: 'billingInfo',
                fullName: values.fullName,
                email: values.email,
                streetAddress: values.streetAddress,
                apt: values.apt,
                city: values.city,
                country: values.country,
                zip: values.zip,
            });
            props.history.push('/payment')
        }
        };

    const returnLastEmail = (arr) =>{
        return arr[arr.length - 1];
    };

    const sameInformation = () =>{
        setValues(returnLastEmail(props.products.userAddress));
    };

    return(
        <Container className='container-fluid'>
            <Row className='d-flex justify-content-center bg'>
                <Col className='bg-white wrapper-shipping-width' md={6} sm={8} xs={10}>
                    <Row>
                        <Col className='d-flex align-items-center shipping-wrapper'>
                            <span>Shipping</span>
                            <Arrow/>
                            <span className='shipping-color'>Billing</span>
                            <Arrow/>
                            <span>Payment</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8} md={8} sm={8} xs={8} className='text-left'>
                            <Title>Billing Information</Title>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={4} className='pr-3'>
                            <SameAsShipping onClick={sameInformation} className="text-right">
                                Same as shipping
                            </SameAsShipping>
                        </Col>
                    </Row>
                    <Form>
                        <Form.Group>
                            <Form.Label className='recipient mb-3'>Billing Contact</Form.Label>
                            <Form.Control onChange={handleChange} name='fullName' value={values.fullName} type="text" placeholder="Full Name" />
                            {errors && <Form.Text className="errors">{errors.fullName}</Form.Text>}
                            <Row className='daytime'>
                                <Col>
                                    <Form.Control required onChange={handleChange} name='email' value={props.email} type="text" placeholder="Email" />
                                    {errors && <Form.Text className="errors">{errors.email}</Form.Text>}
                                </Col>
                            </Row>
                            <Form.Label className='recipient mb-3'>Billing Address</Form.Label>
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
                            <Button onClick={check} className='button-continue mb-4' variant="primary" type="button" block>Continue</Button>
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

const SameAsShipping = styled.p`
    color: #8752B2;
    text-decoration: underline;
    padding-top: 35px;
    font-size: 13px;
    cursor: pointer;
`;

import React, {useState} from "react";
import {Row, Col, Button, Form} from 'react-bootstrap'
import {Order} from "../Order/Order";
import '../shipping.scss'
import styled from "styled-components";
import {shippingInfo} from "../../store/action";
import {connect} from "react-redux";

const mapStateToProps = state =>{
    return{
        ...state
    }
};

export const Shipping = connect (mapStateToProps, {shippingInfo})(props =>{
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

    function validation(values) {
        let errors = {};

        if(!values.fullName){
            errors.fullName = 'Please enter full name'
        }
        if(!values.dayTimePhone){
            errors.dayTimePhone = 'Please enter the phone'
        }else if(isNaN(values.dayTimePhone)){
            errors.dayTimePhone = 'Wrong phone'
        }
        if(!values.streetAddress){
            errors.streetAddress = 'Please enter street address'
        }
        if(!values.apt){
            errors.apt = 'Please enter street address'
        }
        if(!values.city){
            errors.city = 'Please enter the city'
        }
        if(!values.country){
            errors.country = 'Please enter the country'
        }
        if(isNaN(values.zip)){
            errors.zip = 'Wrong zip code'
        }else if(!values.zip){
            errors.zip = 'Please enter the zip code'
        }
        return errors
    }

    const  check = () =>{
        let errors = validation(values);
        if (Object.keys(errors).length){
            setErrors(validation(values));
        }else{
            props.shippingInfo({
                streetAddress: values.streetAddress,
                apt: values.apt,
                city: values.city,
                country: values.country,
                zip: values.zip,
                fullName: props.fullName,
                dayTimePhone: props.phone
            });
            props.history.push('/billing')
        }
    };

    const handleChange = event =>{
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleFocus = () =>{
        console.log('rvrr');
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
                            <Form.Control onFocus={handleFocus} name='fullName' type="text" placeholder="Full Name" value={values.fullName} onChange={handleChange}/>
                            {errors ?
                                <Form.Text className="text-muted">
                                    {errors.fullName}
                                </Form.Text>
                                : null
                            }
                            <Row className='daytime'>
                                <Col md={8} sm={8} xs={8}>
                                    <Form.Control name='dayTimePhone' type="text" placeholder="Daytime Phone" value={values.dayTimePhone} onChange={handleChange} />
                                </Col>
                                <Col>
                                    <Form.Text className="text-muted">
                                        For delivery quetions only
                                    </Form.Text>
                                </Col>
                            </Row>
                            <Form.Label className='recipient mb-0'>Address</Form.Label>
                            <Form.Control onChange={handleChange} name='streetAddress' className='indent' type="text" value={values.streetAddress} placeholder="Street Address" required/>
                            <Form.Control onChange={handleChange} name='apt' className='indent' type="text" value={values.apt} placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
                            <Form.Control onChange={handleChange} name='city' value={values.city} className='indent' type="text" placeholder="City"/>
                            <Row>
                                <Col md={7} sm={7} xs={7}>
                                    <Form.Control value={values.country} name='country' onChange={handleChange} as="select">
                                        <option>Country</option>
                                        <option value='Usa'>USA</option>
                                        <option value='Italy'>Italy</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Control onChange={handleChange} value={values.zip} name='zip' type="text" placeholder="ZIP"/>
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

export const Container = styled.div`
    background-color: #E6E9F0;
    padding-top: 15px;
    height: 100vh;
`;

export const Arrow = styled.div`
    width: 12px;
    height: 12px;
    border: 1px solid gray;
    border-bottom: none;
    border-left: none;
    transform: rotate(45deg);
    margin: 0 15px;
`;

export const Title = styled.h2`
    color: #8752B2;
    margin-top: 25px;
`;

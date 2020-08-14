import React, {useState} from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import { Arrow, Title } from "../ShippingInfo/ShippingInfo";
import { Order } from "../Order/Order";
import { Container } from "../ShippingInfo/ShippingInfo";
import { shippingInfo } from "../../../redux/action";
import { paymentValidation } from "../../../validation";


const mapStateToProps = state => {
    return{
        ...state
    }
};

export const Payment = connect(mapStateToProps, {shippingInfo}) (props => {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        cardHolderName: '',
        cardNumber: '',
        expireDate: '',
        securityCode: '',
    });

    const handleChange = event => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    };

    const check = () => {
        let errors = paymentValidation(values);
        if (Object.keys(errors).length){
            setErrors(paymentValidation(values));
        }else{
            props.shippingInfo({
                type: 'Payment',
                expireDate: values.expireDate,
            });
            props.history.push('/print')
        }
    };

    return(
        <Container className='container-fluid'>
            <Row className='d-flex justify-content-center bg'>
                <Col className='bg-white wrapper-shipping-width' md={6} sm={8} xs={10}>
                    <Row>
                        <Col className='d-flex align-items-center shipping-wrapper'>
                            <span>Shipping</span>
                            <Arrow/>
                            <span>Billing</span>
                            <Arrow/>
                            <span className='shipping-color'>Payment</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-left'>
                            <Title>Payment</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex '>
                            <i className="fas fa-lock lock"></i>
                            <SecureInfo className='ml-2'>This is a secure 128-bit SSL encrypted payment</SecureInfo>
                        </Col>
                    </Row>
                    <Form>
                        <Form.Group>
                            <Form.Label className='recipient'>Cardholder Name</Form.Label>
                            <Form.Control onChange={handleChange} name='cardHolderName' value={props.cardHolderName} type="text" placeholder="Name as it appears on your card" />
                            {errors && <Form.Text className="errors">{errors.cardHolderName}</Form.Text>}
                            <Form.Label className='recipient mt-4'>Card Number</Form.Label>
                            <Form.Control onChange={handleChange} name='cardNumber' value={props.cardNumber} className='indent' type="text" placeholder="XXXX XXXX XXXX XXXX"/>
                            {errors && <Form.Text className="errors">{errors.cardNumber}</Form.Text>}
                            <Row>
                                <Col xl={3} lg={3} md={4} sm={4} xs={5}>
                                    <Form.Label className='recipient mt-3'>Expire Date</Form.Label>
                                    <Form.Control name='expireDate' onChange={handleChange} value={props.expireDate} className='indent' type="text" placeholder="MM/YY"/>
                                    {errors && <Form.Text className="errors">{errors.expireDate}</Form.Text>}
                                </Col>
                                <Col xl={4} lg={4} md={4} sm={4} xs={6}>
                                    <Form.Label className='recipient mt-3'>Security Code</Form.Label>
                                    <Form.Control onChange={handleChange} name='securityCode' value={props.securityCode} type="text" placeholder=""/>
                                    {errors && <Form.Text className="errors">{errors.securityCode}</Form.Text>}
                                </Col>
                            </Row>
                        </Form.Group>
                        <Row>
                            <Col md={7} sm={7} xs={7}>
                                <Button onClick={check} className='button-continue mb-4' variant="primary" type="button" block>Pay Securely</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col className='grey wrapper-order-width' md={5} sm={8} xs={10}>
                    <Order/>
                </Col>
            </Row>
        </Container>
    )
});

const SecureInfo = styled.p`
    color: #CDCDCD;
    font-size: 18px;
`;

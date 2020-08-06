import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Arrow, ShippingInfo, Title} from "../ShippingInfo/ShippingInfo";
import {Order} from "../Order/Order";
import {Container} from '../index'
import {Link} from "react-router-dom";


export const Billing = () =>{
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
                        <Col className='text-left'>
                            <Title>Billing Information</Title>
                        </Col>
                    </Row>
                    <Form>
                        <Form.Group>
                            <Form.Label className='recipient mb-3'>Billing Contact</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" />
                            <Row className='daytime'>
                                <Col>
                                    <Form.Control type="text" placeholder="Email" />
                                </Col>
                            </Row>
                            <Form.Label className='recipient mb-0'>                            <Form.Label className='recipient mb-0'>Billing Address</Form.Label>
                                </Form.Label>
                        </Form.Group>
                    </Form>

                    <ShippingInfo shipping='Billing Info' recipient='Billing Contact' address='Billing Address'/>
                    <Row>
                        <Col md={7} sm={7} xs={7}>
                            <Link to='/payment'>
                                <Button className='button-continue mb-4' variant="primary" type="button" block>Continue</Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col className='grey wrapper-order-width' md={5} sm={8} xs={10}>
                    <Order/>
                </Col>
            </Row>
        </Container>
    )
};

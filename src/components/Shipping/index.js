import React from "react";
import {Arrow, ShippingInfo, Title} from "./ShippingInfo/ShippingInfo";
import {Row, Col, Button, Form} from 'react-bootstrap';
import {Order} from "./Order/Order";
import styled from "styled-components";
import {Link} from "react-router-dom";


export const Shipping = () =>{
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
                            <Form.Control type="text" placeholder="Full Name" />
                            <Row className='daytime'>
                                <Col md={8} sm={8} xs={8}>
                                    <Form.Control type="text" placeholder="Daytime Phone" />
                                </Col>
                                <Col>
                                    <Form.Text className="text-muted">
                                        For delivery quetions only
                                    </Form.Text>
                                </Col>
                            </Row>
                            <Form.Label className='recipient mb-0'>Address</Form.Label>
                        </Form.Group>
                    </Form>

                    <ShippingInfo/>
                    <Row>
                        <Col md={7} sm={7} xs={7}>
                            <Link to='/billing'>
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

export const Container = styled.div`
    background-color: #E6E9F0;
    padding-top: 15px;
    height: 100vh;
`;

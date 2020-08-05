import React from "react";
import {ShippingInfo} from "./ShippingInfo/ShippingInfo";
import { Button, Row, Col, Form } from 'react-bootstrap';
import {Order} from "./Order/Order";
import styled from "styled-components";


export const Shipping = () =>{
    return(
        <Container className='container-fluid'>
            <Row className='d-flex justify-content-center bg'>
                <Col className='bg-white wrapper-shipping-width' md={6} sm={8} xs={10}>
                    <ShippingInfo/>
                </Col>
                <Col className='grey wrapper-order-width' md={5} sm={8} xs={10}>
                    <Order/>
                </Col>
            </Row>
        </Container>
    )
};

const Container = styled.div`
    background-color: #E6E9F0;
    padding-top: 15px;
    height: 100vh;
`;

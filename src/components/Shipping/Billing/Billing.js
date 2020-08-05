import React from "react";
import {Col, Row} from "react-bootstrap";
import {ShippingInfo} from "../ShippingInfo/ShippingInfo";
import {Order} from "../Order/Order";
import {Container} from '../index'


export const Billing = (props) =>{

    return(
        <Container className='container-fluid'>
            <Row className='d-flex justify-content-center bg'>
                <Col className='bg-white wrapper-shipping-width' md={6} sm={8} xs={10}>
                    <ShippingInfo shipping='Billing Info' recipient='Billing Contact' address='Billing Address'/>
                </Col>
                <Col className='grey wrapper-order-width' md={5} sm={8} xs={10}>
                    <Order/>
                </Col>
            </Row>
        </Container>
    )
};

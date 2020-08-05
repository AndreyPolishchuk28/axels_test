import React from "react";
import { Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import '../shipping.scss'


export const Order = () =>{
    return(
        <Container>
            <Row>
                <Col>
                    <Title>Order Summary</Title>
                </Col>
                <Col className='text-right'>
                    <Edit>edit order</Edit>
                </Col>
            </Row>
            <Row className='wrapper-product ml-1'>
                <Col xl={2} md={2} sm={2} xs={2} className='p-0'>
                    <FirstImg/>
                </Col>
                <Col xl={7} md={8} sm={6} xs={6} className='text-left img-size d-flex flex-column justify-content-between'>
                    <NameProduct>The Chelsea Boot</NameProduct>
                    <Color>Black</Color>
                    <Quantity>Quantity:1</Quantity>
                </Col>
                <Col xl={3} md={2} sm={4} xs={4} className='text-right p-0'>
                    <Price>$235</Price>
                </Col>
            </Row>
            <Row className='wrapper-product ml-1'>
                <Col xl={2} md={2} sm={2} xs={2} className='p-0'>
                    <FirstImg/>
                </Col>
                <Col xl={8} md={8} sm={7} xs={8} className='text-left img-size d-flex flex-column justify-content-between'>
                    <NameProduct>The Twill Snap Backpack</NameProduct>
                    <Color>Reverse Denim + Brown leather</Color>
                    <Quantity>Quantity:1</Quantity>
                </Col>
                <Col xl={2} md={2} sm={3} xs={2} className='text-right p-0'>
                    <Price>$65</Price>
                </Col>
            </Row>
            <Row className='wrapper-product ml-1'>
                <Col xl={2} md={2} sm={2} xs={2} className='p-0'>
                    <FirstImg/>
                </Col>
                <Col xl={8} md={8} sm={6} xs={6} className='text-left img-size d-flex flex-column justify-content-between'>
                    <NameProduct>The Twill Zip Tote</NameProduct>
                    <Color>Reverse Denim + Brown leather</Color>
                    <Quantity>Quantity:1</Quantity>
                </Col>
                <Col xl={2} md={2} sm={4} xs={4} className='text-right p-0'>
                    <Price>$48</Price>
                </Col>
            </Row>
            <Row className='wrapper-product ml-1'>
                <Col xl={8} md={8} sm={8} xs={8} className='d-flex flex-column justify-content-between text-left p-0'>
                    <TotalPrice>Subtotal</TotalPrice>
                    <TotalPrice>Shipping</TotalPrice>
                    <TotalPrice>Taxes</TotalPrice>
                </Col>
                <Col xl={4} md={4} sm={4} xs={4} className='text-right p-0 d-flex flex-column justify-content-between'>
                    <TotalPrice>$398</TotalPrice>
                    <TotalPrice>Free</TotalPrice>
                    <TotalPrice>$12.12</TotalPrice>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <TotalPricePurple>Total</TotalPricePurple>
                </Col>
                <Col className='text-right pb-5'>
                    <TotalPricePurple>$410.12</TotalPricePurple>
                </Col>
            </Row>
            <Row className='text-center mt-5'>
                <Col>
                    <Conditions>All purchases are subject to our <UnderlineConditions>Terms and Condition</UnderlineConditions>s</Conditions>
                </Col>
            </Row>
        </Container>

    )
};

const Container = styled.div`
    padding-top: 20px;
`;

const Title = styled.h3`
    color: #8752B2;
    font-size: 20px;
    font-weight: 400;
`;

const Edit = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;

const FirstImg = styled.div`
    width: 50px;
    height: 100%;
    background-color: red;
`;

const NameProduct = styled.p`
    color: #BDBFC1;
    margin: 0;
    font-size: 14px;
    line-height: 1;
`;

const Color = styled.p`
    color: #000;
    font-size: 12px;
    margin: 0;
    line-height: 1;
`;

const Quantity = styled.p`
    color: #000;
    font-size: 12px;
    margin: 0;
    line-height: 1;
`;

const Price = styled.span`
    color: #BDBFC1;
    font-size: 16px;
    line-height: 1;
`;

const TotalPrice = styled.span`
    color: #BDBFC1;
    font-size: 16px;
    line-height: 1.4;
`;

const TotalPricePurple = styled.span`
    color: #5B3A72;
    font-weight: bold;
`;

const Conditions = styled.p`
    color: #CDCECF;
    font-size: 12px;
`;

const UnderlineConditions = styled.span`
    text-decoration: underline;
    color: #CDCECF;
    font-size: 12px;
`;




import React, {useEffect, useState} from "react";
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import {getProducts} from "../../store/action";
import styled from "styled-components";
import '../shipping.scss'


const mapStateToProps = state => ({
    product: state.products.product
});
export const Order = connect (mapStateToProps, {getProducts})( props =>{
    useEffect(() =>{
        props.getProducts();
    },[]);

    const totalPrice = () => {
        let cost = 0;
        props.product.products.forEach(elem =>{
            cost += elem.price
        });
        return cost
    };

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
            {props.product.products ? props.product.products.map(item =>
                <Row key={item.id} className='wrapper-product ml-1'>
                    <Col xl={2} md={2} sm={2} xs={2} className='p-0'>
                        <FirstImg src={item.img} />
                    </Col>
                    <Col xl={7} md={8} sm={6} xs={6} className='text-left img-size d-flex flex-column justify-content-between'>
                        <NameProduct>{item.name}</NameProduct>
                        <Color>{item.color}</Color>
                        <Quantity>Quantity: {item.quantity}</Quantity>
                    </Col>
                    <Col xl={3} md={2} sm={4} xs={4} className='text-right p-0'>
                        <Price>${item.price}</Price>
                    </Col>
                </Row>
            ):null
            }
            <Row className='wrapper-product ml-1'>
                <Col xl={8} md={8} sm={8} xs={8} className='d-flex flex-column justify-content-between text-left p-0'>
                    <TotalPrice>Subtotal</TotalPrice>
                    <TotalPrice>Shipping</TotalPrice>
                    <TotalPrice>Taxes</TotalPrice>
                </Col>
                <Col xl={4} md={4} sm={4} xs={4} className='text-right p-0 d-flex flex-column justify-content-between'>
                    {props.product.products ?
                        <TotalPrice>{totalPrice()}</TotalPrice> : null
                    }
                    <TotalPrice>Free</TotalPrice>
                    {props.product.products ?
                        <TotalPrice>${props.product.taxes}</TotalPrice> : null
                    }

                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <TotalPricePurple>Total</TotalPricePurple>
                </Col>
                <Col className='text-right pb-5'>
                    {props.product.products ?
                        <TotalPricePurple>${totalPrice() + props.product.taxes}</TotalPricePurple> : null
                    }
                </Col>
            </Row>
            <Row className='text-center mt-5'>
                <Col>
                    <Conditions>All purchases are subject to our <UnderlineConditions>Terms and Conditions</UnderlineConditions></Conditions>
                </Col>
            </Row>
        </Container>

    )
});

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

const FirstImg = styled.img`
    width: 50px;
    height: 100%;
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




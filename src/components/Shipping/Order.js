import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { Container, Title, Edit, FirstImg, NameProduct, Color, Quantity, Price, TotalPrice, TotalPricePurple, Conditions, UnderlineConditions } from '../../styled/Shipping/order';
import { getProducts } from '../../redux/ducks/products';

const mapStateToProps = state => ({...state});

export const Order = connect (mapStateToProps, { getProducts })(props => {
    const products = props.products.product;

    useEffect(() => {
        props.getProducts();
    },[]);

    const totalPrice = () => {
        let cost = 0;
        products.products.forEach(elem => cost += elem.price);
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
            {products.products && products.products.map(item =>
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
            )
            }
            <Row className='wrapper-product ml-1'>
                <Col xl={8} md={8} sm={8} xs={8} className='d-flex flex-column justify-content-between text-left p-0'>
                    <TotalPrice>Subtotal</TotalPrice>
                    <TotalPrice>Shipping</TotalPrice>
                    <TotalPrice>Taxes</TotalPrice>
                </Col>
                <Col xl={4} md={4} sm={4} xs={4} className='text-right p-0 d-flex flex-column justify-content-between'>
                    {products.products && <TotalPrice>{totalPrice()}</TotalPrice>}
                    <TotalPrice>Free</TotalPrice>
                    {products.products && <TotalPrice>${products.taxes}</TotalPrice>}
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <TotalPricePurple>Total</TotalPricePurple>
                </Col>
                <Col className='text-right pb-5'>
                    {products.products && <TotalPricePurple>${totalPrice() + products.taxes}</TotalPricePurple>}
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

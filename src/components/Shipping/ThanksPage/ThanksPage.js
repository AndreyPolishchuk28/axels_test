import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import styled from "styled-components";
import {connect} from "react-redux";
import {Order} from "../Order/Order";
import {Container} from "../ShippingInfo/ShippingInfo";
import {shippingInfo} from "../../../redux/action";


const mapStateToProps = state =>{
    return{
        ...state
    }
};

export const ThanksPage = connect(mapStateToProps, {shippingInfo})(props =>{
    const [email, setEmail] = useState();

    const returnLastEmail = (arr) =>{
        return arr[arr.length - 2];
    };

    useEffect(() =>{
        if (props.products){
            setEmail(returnLastEmail(props.products.userAddress))
        }
    },[]);

    return(
        <Container className='container-fluid'>
            <Row className='d-flex justify-content-center bg'>
                <Col className='bg-white wrapper-shipping-width' md={6} sm={8} xs={10}>
                    <Row>
                        <Col className='text-left mt-5 ml-3'>
                            <Title>Thank you for your order!</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-left ml-3'>
                            <OrderNumber>Order number is: 188787788</OrderNumber>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-left ml-3 mr-5'>
                            {email && <EmailInfo>Your will receive an email confirmation shortly to <Email>{email.email}</Email></EmailInfo>}
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-left ml-3'>
                            <EmailInfo className='mb-0'>Estimated delivery Day is</EmailInfo>
                            <Date>Friday 1st April 2016</Date>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-left ml-3 mt-2'>
                            <Print>Print Recipe</Print>
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

const Title = styled.p`
    color: #8752B2;
    font-weight: 400;
    font-size: 28px;
`;

const OrderNumber = styled.p`
    color: #000;
    font-weight: 600;
    font-size: 18px;
`;

const EmailInfo = styled.p`
    color: #000;
    font-weight: 400;
    font-size: 18px;
`;

const Email = styled.span`
    color: #A279C3;
    font-weight: 400;
    font-size: 18px;
    text-decoration: underline;
    cursor: pointer;
`;

const Date = styled.p`
    color: #000;
    font-weight: 600;
    font-size: 18px;
`;

const Print = styled.p`
    color: #A279C3;
    font-weight: 400;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`;

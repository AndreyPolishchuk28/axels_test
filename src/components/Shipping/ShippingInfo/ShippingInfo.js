import React from "react";
import { Button, Row, Col, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import '../shipping.scss'

export const ShippingInfo = (props) =>{
    // const [color, setColor] = useState(false);
    //
    // useEffect(() =>{
    //     if (props.location.pathname === '/billing'){
    //         setColor(true)
    //     }else{
    //         setColor(false)
    //     }
    // },[]);


    return(
        <div>
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
                    <Title>{props.shipping}</Title>
                </Col>
            </Row>
            <Form>
                <Form.Group>
                    <Form.Label className='recipient'>{props.recipient}</Form.Label>
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
                    <Form.Label className='recipient'>{props.address}</Form.Label>
                    <Form.Control className='indent' type="text" placeholder="Street Address"/>
                    <Form.Control className='indent' type="text" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
                    <Form.Control className='indent' type="text" placeholder="City"/>
                    <Row>
                        <Col md={7} sm={7} xs={7}>
                            <Form.Control as="select">
                                <option>Country</option>
                                <option>USA</option>
                                <option>Italy</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="ZIP"/>
                        </Col>
                    </Row>
                </Form.Group>

                <Row>
                    <Col md={7} sm={7} xs={7}>
                        <Link to='/billing'>
                        <Button className='button-continue mb-4' variant="primary" type="button" block>Continue</Button>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    )
};

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






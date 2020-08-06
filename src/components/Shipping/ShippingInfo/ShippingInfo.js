import React, {useEffect, useState} from "react";
import { Button, Row, Col, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import '../shipping.scss'

export const ShippingInfo = (props) =>{
    const [address, setAddress] = useState();

    const getLocation = () =>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const getCoordinates = (position) =>{
        console.log(position);
    };

    useEffect(() =>{
       getLocation();
    },[]);

    return(
        <div>
            <Form>
                <Form.Group>
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






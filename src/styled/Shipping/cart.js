import styled from 'styled-components'

export const Container = styled.div`
    background-color: #fff;
    width: 75%;
    position: relative;
    text-align: right;
    margin: 0 auto;
    padding-top: 5px;
`;

export const QuantityWrapper = styled.div`
    width: 17px;
    height: 17px;
    background-color: #FF1876;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: -10px;
`;

export const QuantityProducts = styled.span`
    color: #fff;
    font-size: 14px;
`;

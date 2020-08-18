import styled from 'styled-components';
import { mainColor, lightPurple } from '../globalVariables';

export const Title = styled.p`
    color: ${mainColor};
    font-weight: 400;
    font-size: 28px;
`;

export const OrderNumber = styled.p`
    color: #000;
    font-weight: 600;
    font-size: 18px;
`;

export const EmailInfo = styled.p`
    color: #000;
    font-weight: 400;
    font-size: 18px;
`;

export const Email = styled.span`
    color: ${lightPurple};
    font-weight: 400;
    font-size: 18px;
    text-decoration: underline;
    cursor: pointer;
`;

export const Date = styled.p`
    color: #000;
    font-weight: 600;
    font-size: 18px;
`;

export const Print = styled.p`
    color: ${lightPurple};
    font-weight: 400;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`;

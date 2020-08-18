import styled from 'styled-components';
import { mainColor, device } from './globalVariables';

export const Container = styled.div`
    background-color: #E6E9F0;
    padding-top: 15px;
    height: 100vh;
      
    .wrapper-product{
      margin-top: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #BDBFC1;
      width: 97%;
    }
    
    .button-continue{
      background-color: ${mainColor};
      border: 1px solid ${mainColor};
    }

    .button-continue:hover{
      background-color: ${mainColor};
    }
    
    .recipient{
      color: ${mainColor};
    }
    
    .daytime{
      margin-top: 10px;
      margin-bottom: 20px;
    }
    
    .indent{
      margin-bottom: 10px;
    }

    .shipping-wrapper{
      padding-top: 20px;
    }
    
    .grey{
      background-color: #F1F3F6;
    }
    
    .img-size{
      height: 50px;
    }
    
    .bg{
      background-color: #E6E9F0;
    }

    .shipping-color{
      color: ${mainColor};
    }
    
    .errors{
      color: red;
    }
    
    .lock{
      font-size: 20px;
    }
    
    @media screen and ${device.laptop} {
     .wrapper-shipping-width{
        max-width: 450px;
     }

     .wrapper-order-width{
       max-width: 350px;
     }
    }
    
    @media screen and ${device.tabletL} {
     .wrapper-shipping-width{
       min-width: 450px;
       max-width: 450px;
     }

     .wrapper-order-width{
       min-width: 350px;
       max-width: 350px;
     }
    }
    
`;

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
    color: ${mainColor};
    margin-top: 25px;
    font-size: 30px;
`;

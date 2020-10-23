import styled from 'styled-components';

export const Creative =styled.div`
    height: 500px;    
    background: url('images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    @media (max-width:991px) {
        height: auto;
    }
`;

export const CreativeInfo  = styled.div`
    width: 48%;
    float: right;
    @media (max-width:991px) {
        width: 100%;
        padding-top: 10px;
        float: none;
    }
`;

export const CreativeTitle = styled.h2`
    font-weight: bold;
    font-size: 50px;
    margin:40px 0 0 0; 
`;

export const CreativeSpan =styled.span`
    font-weight: normal;
`;

export const CreativeDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    
    margin:20px 0;

    @media (max-width:991px) {        
        font-size: 30px;
    }
`;

export const CreativeDesc =styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
`;

export const CreativeDescLink =styled.a`
    text-decoration: none;
`;

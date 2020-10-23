import styled from 'styled-components';

export const Social = styled.div`
    height: auto;
    overflow: hidden;
`;

export const SocialNet = styled.div`
    justify-content: center;
    width: 33.33%;
    float: left;
    display: flex;
    box-sizing: border-box;
    padding: 50px 0;
    align-items: center;
    background:${props => props.id==="1" ? "#3b5998":props.id==="2"?"#498cbf":"#cc2127"};

    @media (max-width:991px) {
        width: 100%;
        float: none;
    }
`;

export const SocialIcon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
`;

export const SocialInfo = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
`;

export const SocialInfoSpan = styled.span`
    display: block;
    margin-bottom: 8px;
    font-weight: ${props => props.info2?"normal":""};
`



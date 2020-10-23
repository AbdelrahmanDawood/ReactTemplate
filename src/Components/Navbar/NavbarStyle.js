import styled from "styled-components";

export const NavbarSection=styled.div`
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
`;
export const NavbarContainer=styled.div`
    width: 85%;
    margin: auto;
    overflow: hidden;
    display:flex;
`
export const Logo=styled.div `
    width: 45%;
    float: left;

    @media (max-width : 991px) {
        width: 100%;
        float: none;
    }
`;
export const LogoText=styled.h2`
    font-size: 30px;
    font-weight: bold;
`;

export const UlList =styled.ul`
    width: 55%;
    float: left;
    list-style: none;
    padding: 0;
    margin: 2% 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width : 991px){
        width: 100%;
        float:  none;
        margin-top: 20px;
        display: none
    }
`;
export const ListItem =styled.li`
    display: inline-block;
    @media (max-width : 991px){
        display: block;
        text-align: center;
    }
`;

export const ListItemLink=styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover{
        color: #eb5424;
    }
`;
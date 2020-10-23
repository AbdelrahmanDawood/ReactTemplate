import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarSection,NavbarContainer,Logo,LogoText,UlList,ListItem,ListItemLink} from './NavbarStyle.js';

const Navbar = () => {
    return(
        <NavbarSection>
            <NavbarContainer>
                <Logo>
                    <LogoText>
                        Ultra Porfile
                    </LogoText>
                </Logo>
                <UlList>
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><ListItemLink to="/Work">Work</ListItemLink></ListItem>
                    <ListItem><ListItemLink to="/Portofolio">Portofolio</ListItemLink></ListItem>
                    <ListItem><ListItemLink to="/Profile">Resume</ListItemLink></ListItem>
                    <ListItem><ListItemLink to="/About">About</ListItemLink></ListItem>
                    <ListItem><Link to="/Contact">Contact</Link></ListItem>
                </UlList>
            </NavbarContainer>
        </NavbarSection>
    )
}
export default Navbar;
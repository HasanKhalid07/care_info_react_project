import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Pictures/logo.jpeg';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  background-color: #b71c1c; // Darker red color
  color: white;
  position: fixed;
  width: 100%;
  height: 90px;
  top: ${({ scrolled }) => (scrolled ? '0px' : '30px')}; 
  transition: top 0.3s;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
`;

const Logo = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-left: 1rem; 
`;

const NavbarText = styled.span`
  font-size: 1.5rem; 
  margin-left: 1rem; // Gap between the logo and "Gadhimai Temple"
  margin-right: 3rem; // Gap between "Gadhimai Temple" and the navigation links
  white-space: nowrap; 
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  justify-content: space-between; 
`;

const NavItem = styled.li`
  position: relative;
  margin: 30px; 
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? 'black' : 'white')}; 

  &:hover {
    color: black; 
  }

  &:hover ul {
    display: block;
  }
`;

const SubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white; 
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  z-index: 1000;

  li {
    padding: 0.5rem 1rem;
    color: black; 

    &:hover {
      color: red; 
    }
  }
`;

const StyledLink = styled(Link)`
  color: inherit; 
  text-decoration: none; 
  display: block; 
  height: 100%;
  padding: 0 1rem; 
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentPath = location.pathname; 

  return (
    <NavbarContainer scrolled={scrolled}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Logo src={logo} alt="Logo" />
        <NavbarText>Gadhimai Temple</NavbarText>
      </div>
      <NavLinks>
        <NavItem isActive={currentPath === '/'}>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about-the-temple">About <span>▼</span></StyledLink>
          <SubMenu>
            <li><StyledLink to="/about-temple">About Temple</StyledLink></li>
            <li><StyledLink to="/about-temple-events">About Temple Events</StyledLink></li>
          </SubMenu>
        </NavItem>
        <NavItem>
          <StyledLink to="/management-structure">Management Structure <span>▼</span></StyledLink>
          <SubMenu>
            <li><StyledLink to="/temple-management-committee">Temple Management Committee</StyledLink></li>
            <li><StyledLink to="/trustee">Trustee</StyledLink></li>
          </SubMenu>
        </NavItem>
        <NavItem>
          <StyledLink to="/gallery">Gallery <span>▼</span></StyledLink>
          <SubMenu>
            <li><StyledLink to="/photo-album">Photo Album</StyledLink></li>
            <li><StyledLink to="/video-album">Video Album</StyledLink></li>
          </SubMenu>
        </NavItem>
        <NavItem isActive={currentPath === '/volunteer-form'}>
          <StyledLink to="/volunteer-form">Volunteer</StyledLink>
        </NavItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;

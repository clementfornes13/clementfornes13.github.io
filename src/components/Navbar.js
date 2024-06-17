// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </Nav>
    );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #333;
  padding: 1rem;
  a {
    color: white;
    text-decoration: none;
  }
`;

export default Navbar;

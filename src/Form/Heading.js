import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';

export const Heading = () => {
  
    return (
      <Navbar color="dark" dark>
            <Container>
                <NavbarBrand her='/'>My Team</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/add">Add User</Link>
                    </NavItem>
                </Nav>
          </Container>
          
      </Navbar>
    );
}

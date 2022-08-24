import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';

const DashboardHeader = () => {
  return (
    
      <header>
       <Navbar>
        <Container>
            <LinkContainer to='/'>
            <Navbar.Brand > Your Ecommerce shop</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className="mr=auto">
                <LinkContainer to='/products'>
                  <Nav.Link> 
                    <i className="fas fa-product-hunt"></i>Products
                  </Nav.Link></LinkContainer>
                <LinkContainer to='/cart'>
                  <Nav.Link >
                    <i className="fasfa-shopping-cart"></i>Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer>
                  <Nav.Link to='/profile'> 
                    <i className="fas fa-user"></i>Profile
                  </Nav.Link></LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Container>
       </Navbar>
        </header>
   
  )
}

export default DashboardHeader;

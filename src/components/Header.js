import React from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>BVBookstore</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <LinkContainer to='/carts/1'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>
                  Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link} from 'react-router-dom';
const Navigation = () => {

  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/' className="fw-bold">
          Metal Tools House
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              <Nav.Item>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/blog'>
                  Blog
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Nav.Item>
             <Nav.Link>

              <Button className='px-3 py-1 m-1' as={Link} to='login' variant='dark'>
                SignIn
              </Button>


              <Button className='px-3 py-1 m-1' as={Link} to='signup' variant='dark'>
                SignUp
              </Button>
            </Nav.Link>
            </Nav.Item>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
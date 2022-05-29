import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';
import avatar from '../Images/avatar/avatar.jpg';
import './Navigation.css';
const Navigation = () => {

  const { user } = useAuth();
  const { logOut } = useFirebase();

  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/' className="fw-bold">
            Sportswear City
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              <Nav.Item>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
              </Nav.Item>

              {user?.email ? (
                <>
                  <Nav.Item>
                    <Nav.Link as={Link} to='/dashboard'>
                      Dashboard
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to='/'>
                      Add Inventory
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to='/'>
                      My Inventories
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <></>
              )}

              <Nav.Item>
                <Nav.Link as={Link} to='/'>
                  Blog
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Nav.Item>
            {!user?.email ? <Nav.Link>

              <Button className='px-3 py-1 m-1' as={Link} to='login' variant='dark'>
                SignIn
              </Button>


              <Button className='px-3 py-1 m-1' as={Link} to='signup' variant='dark'>
                SignUp
              </Button>
            </Nav.Link>
              :
              <div className="ms-auto d-flex justify-content-center align-items-center">
                <div className="nav-item ms-lg-4">
                  {user?.email ? <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                      <NavLink to="/">{user?.email && user?.photoURL ? <img src={user?.photoURL} className="user-img" alt="" /> : <img src={avatar} title="User not logged in" alt="" className="user-img" />}</NavLink>
                      {user?.email && <span className="nav-text ms-3 text-uppercase">{user?.displayName}</span>}
                    </div>
                    <button onClick={logOut} className="btn authentication-btn rounded-pill ms-3"><p className='m-0'><i class="fas fa-sign-out-alt me-2"></i>Log Out</p></button>

                  </div>
                    : <div>
                      <NavLink to="/signin"><button className="btn authentication-btn rounded-0 me-3"><p><i class="fas fa-sign-in-alt me-2"></i>Log In</p></button></NavLink>
                      <NavLink to="/signup"><button className="btn authentication-btn rounded-0"><p><i class="fas fa-sign-in-alt me-2"></i>Register</p></button></NavLink>
                    </div>}
                </div>
              </div>}
          </Nav.Item>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Frame from './assets/Frame.svg';

function Navigation() {
    return (
        <div>
            {/* NAVBAR */}
            <Navbar collapseOnSelect expand="lg" variant="dark" className='navbar' fixed='top'>
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/">
                            <img src={Frame} alt="Logo DumbMerch"
                                style={{ width: "60px" }}
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <Link to="/user-complain" style={{ textDecoration: "none", color: "white" }}>Complain</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>Profile</Link>
                            </Nav.Link>
                            {/* <Nav.Link>
                                <Link to="/list-category" style={{ textDecoration: "none", color: "white" }}>Category</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/list-product" style={{ textDecoration: "none", color: "white" }}>Product</Link>
                            </Nav.Link> */}
                            <Nav.Link>
                                <Link to="/login" style={{ textDecoration: "none", color: "white" }}>Logout</Link>
                            </Nav.Link>
                            <Nav.Link href="#deets">
                                <Link to="/cart" className='cart' style={{ textDecoration: "none", color: "white" }}>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* NAVBAR */}
        </div>
    )
}

export default Navigation
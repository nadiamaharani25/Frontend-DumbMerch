import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Homepage from './pages/front/Homepage/Homepage';
import Detail from './pages/front/Detail/Detail';
import Profile from './pages/front/Profile/Profile';
import ListCategory from './pages/front/Category/ListCategory';
import EditCategory from './pages/front/Category/EditCategory';
import ListProduct from './pages/front/Product/ListProduct';
import EditProduct from './pages/front/Product/EditProduct';
import UserComplain from './pages/front/Complain/UserComplain';
import AdminComplain from './pages/front/Complain/AdminComplain';
import Cart from './pages/front/Cart/Cart';
import PrivateRoute from './components/PrivateRoute';
import { Container, Nav, Navbar } from 'react-bootstrap';
import DetailProduct from './components/DetailProduct';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className='navbar' fixed='top'>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link as={Link} to={"/Homepage"}></Nav.Link>
                <Nav.Link as={Link} to={"/Complain"}>Complain</Nav.Link>
                <Nav.Link as={Link} to={"/Profilee"}>Profile</Nav.Link>
                <Nav.Link as={Link} to={"/Login"}>Logout</Nav.Link>
                <Nav.Link as={Link} to={"/Cartt"}><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
                <Nav.Link as={Link} to={"/Login"}></Nav.Link>
                <Nav.Link as={Link} to={"/Register"}></Nav.Link>
                <Nav.Link as={Link} to={"/Category"}></Nav.Link>
                <Nav.Link as={Link} to={"/Product"}></Nav.Link>
                <Nav.Link as={Link} to={"/product/:id"}></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/list-category' element={<ListCategory />} />
          <Route path='/edit-category' element={<EditCategory />} />
          <Route path='/list-product' element={<ListProduct />} />
          <Route path='/edit-product' element={<EditProduct />} />
          <Route path='/user-complain' element={<UserComplain />} />
          <Route path='/admin-complain' element={<AdminComplain />} />
          <Route path='/product/:id' element={<Detail />} />
          <Route path='/detailproduct' element={<DetailProduct />} />
        </Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;

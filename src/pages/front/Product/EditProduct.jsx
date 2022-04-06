import React from 'react'
import './Product.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Frame from './assets/Frame.svg';
import NavigationAdmin from '../NavigationAdmin/NavigationAdmin';

const EditProduct = () => {
    return (
        <div>
            <NavigationAdmin />

            {/* <div className='container'> */}
            <Form style={{ marginBottom: "50px" }}>
                <div>
                    <h3 className='edit-product'>Edit Product</h3>
                </div>

                <button type='button' className='btn btn-danger' style={{ width: "130px", margin: "auto" }}>
                    Upload Image
                </button><span className='img-name'>Mouse.jpg</span>

                <Form.Group className="input-name mb-3 mt-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="" value="Mouse" style={{ backgroundColor: "rgb(48, 47, 47)", color: "white" }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ProductForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={4}
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        style={{ backgroundColor: "rgb(48, 47, 47)", color: "white" }} />
                </Form.Group>

                <Form.Group className="input-price mb-3" controlId="formBasicPrice">
                    <Form.Control type="number" placeholder="" value="500.000" style={{ backgroundColor: "rgb(48, 47, 47)", color: "white" }} />
                </Form.Group>

                <Form.Group className="input-stock mb-3" controlId="formBasicStock">
                    <Form.Control type="number" placeholder="" value="600" style={{ backgroundColor: "rgb(48, 47, 47)", color: "white" }} />
                </Form.Group>

                <Button variant="success" type="submit" className='btn btn-sm btn-success'
                    style={{ width: "100%", margin: "auto", marginTop: "50px" }}>
                    Save
                </Button>
            </Form>
            {/* </div> */}
        </div>
    )
}

export default EditProduct
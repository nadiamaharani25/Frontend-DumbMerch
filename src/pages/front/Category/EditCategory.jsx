import React from 'react'
import './ListCategory.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Frame from './assets/Frame.svg';
import NavigationAdmin from '../NavigationAdmin/NavigationAdmin';


const EditCategory = () => {
    return (
        <div>
            <NavigationAdmin />

            <div className='container'>
                <Form>
                    <h3 className='edit' style={{ color: "white" }}>Edit Category</h3>
                    <Form.Group className="input-mouse" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Mouse" style={{ backgroundColor: "rgb(48, 47, 47)" }} />
                    </Form.Group>

                    <Button variant="success" type="submit" className='btn-save btn-sm btn-success'>
                        Save
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default EditCategory
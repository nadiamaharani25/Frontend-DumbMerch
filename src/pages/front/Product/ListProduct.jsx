import React from 'react'
import './Product.css';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteButton from '../../../components/DeleteButton/DeleteButton';
import NavigationAdmin from '../NavigationAdmin/NavigationAdmin';
import DummyListProduct from '../../back/Data/Dummy/DummyListProduct';


const ListProduct = () => {

    return (
        <div>
            <NavigationAdmin />

            <div className='container'>
                <div>
                    <h3 className='list-category'>List Product</h3>
                </div>

                <Table striped hover variant="dark">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th style={{ width: "15%" }}>Photo</th>
                            <th style={{ width: "15%" }}>Product Name</th>
                            <th style={{ width: "18%" }}>Product Desc</th>
                            <th style={{ width: "8%" }}>Price</th>
                            <th style={{ width: "8%" }}>Qty</th>
                            <th style={{ width: "30%" }}>Action</th>
                        </tr>
                    </thead>

                    {
                        DummyListProduct.map((product, index) => (
                            <tbody>
                                <tr key={index}>
                                    <td>{product.no}</td>
                                    <td>{product.photo}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.productDesc}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <span className='button'>
                                            <button className='btn btn-sm btn-success'>
                                                <Link to='/edit-product' style={{ textDecoration: "none", color: "white" }}>
                                                    Edit
                                                </Link>
                                            </button>
                                            <DeleteButton />
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }

                </Table>
            </div>
        </div>
    )
};

export default ListProduct

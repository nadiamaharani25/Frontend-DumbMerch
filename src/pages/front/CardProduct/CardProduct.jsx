import React from 'react'
import './CardProduct.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DummyProduct from '../../back/Data/Dummy/DummyProduct';


const styles = {

    Card: {
        width: '20rem',
        marginRight: "50px",
        marginTop: "20px",
        margin: "auto",
        backgroundColor: 'black'
    },

    LinkTitle: {
        textDecoration: "none",
        color: "red",
    },

    LinkCart: {
        textDecoration: "none",
        color: "white",
    },

    // Price and Stock
    ListGroupItem: {
        backgroundColor: 'black',
        color: 'white',
    },
}

function CardProduct() {
    return (

        <div className='container-card'>
            <div className='d-flex flex-wrap'>
                <div className='card-header'>
                    <div className='row g-0'>
                        <div className='text-product'>
                            <h3>Product</h3>
                        </div>

                        {
                            DummyProduct.map((product) => (

                                <div className='col-md-4 my-3'>
                                    <Card>
                                        <Card.Img variant="top" src={product.img} className='mouse' />
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem className='text fw-bold' style={styles.ListGroupItem}>
                                                <Link to='/product/:1' style={styles.LinkTitle}>
                                                    {product.title}
                                                </Link>
                                            </ListGroupItem>
                                            <ListGroupItem className='text2' style={styles.ListGroupItem}>
                                                {product.price}
                                            </ListGroupItem>
                                            <ListGroupItem className='text2' style={styles.ListGroupItem}>
                                                {product.stock}
                                                <button className='btn btn-danger' type='button'>
                                                    <Link to='/cart' style={styles.LinkCart}>
                                                        Add to Cart
                                                    </Link>
                                                </button>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;
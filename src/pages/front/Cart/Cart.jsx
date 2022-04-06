import React from 'react'
import './Cart.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Frame from './assets/Frame.svg';
import Keyboard from './assets/keyboard.png';
import Mouse from './assets/mouse.png';
import Navigation from '../Navigation/Navigation';

const Cart = () => {
    return (
        <div>
            <Navigation />

            <div className='container-cart'>
                <Card className="text-center" style={{ backgroundColor: "rgb(63, 62, 62)" }}>
                    <Card.Header className='card-header-cart'
                        style={{ color: "red", fontWeight: "bold", backgroundColor: "rgb(44, 43, 43)" }}>Cart Items</Card.Header>
                    <Card.Body className='card-body-cart'>

                        {/* LEFT SIDE */}
                        <div className='row g-0'>
                            <div className='col-md-3'>
                                <div className='pict'>
                                    <span style={{ marginRight: "5px" }}>
                                        <img src={Mouse} alt="" style={{ width: "150px", marginBottom: "30px", margin: "auto" }} />
                                    </span>
                                </div>
                            </div>

                            <div className='col-md-3' style={{ marginTop: "70px", margin: "auto" }}>
                                <div style={{ margin: "auto" }}>
                                    <p style={{ color: "white" }}>Mouse</p>
                                </div>
                            </div>

                            <div className='col-md-3' style={{ marginTop: "50px", margin: 'auto' }}>
                                {/* BUTTON */}
                                <div style={{ display: "flex", marginTop: "70px", margin: "auto" }}>
                                    <div className='col'>
                                        <button className='btn btn-sm btn-primary' style={{ padding: "5px 23px" }}>+</button>
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-sm btn-primary' style={{ padding: "5px 25px" }}>-</button>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3' style={{ marginTop: "70px", margin: "auto" }}>
                                <p style={{ color: "white" }}>1 * Rp.300.000</p>
                            </div>
                        </div>
                        {/* LEFT SIDE */}

                        {/* RIGHT SIDE */}
                        <div className='row g-0'>
                            <div class='col-md-3'>
                                <div className='pict'>
                                    <img src={Keyboard} alt="" style={{ width: "150px", marginBottom: "30px", margin: "auto" }} />
                                </div>
                            </div>

                            <div className='col-md-3 for-mouse' style={{ marginTop: "70px", margin: "auto" }}>
                                <span style={{ margin: "auto" }}>
                                    <p style={{ color: "white" }}>Keyboard</p>
                                </span>
                            </div>

                            <div className='col-md-3' style={{ marginTop: "50px", margin: "auto" }}>
                                {/* BUTTON */}
                                <div style={{ display: "flex", marginTop: "10px", margin: "auto" }}>
                                    <div className='col'>
                                        <button className='btn btn-sm btn-primary' style={{ padding: "5px 23px" }}>+</button>
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-sm btn-primary' style={{ padding: "5px 25px" }}>-</button>
                                    </div>
                                </div>
                            </div>

                            <div class='col-md-3' style={{ marginTop: "70px", margin: "auto" }}>
                                <p style={{ color: "white" }}>1 * Rp.700.000</p>
                            </div>
                        </div>
                        {/* RIGHT SIDE */}

                    </Card.Body>
                    <Card.Footer className="text-muted"
                        style={{ backgroundColor: "rgb(44, 43, 43)" }}>
                        Total Price : Rp.1.000.000
                    </Card.Footer>
                </Card >
            </div >
        </div >
    )
}

export default Cart
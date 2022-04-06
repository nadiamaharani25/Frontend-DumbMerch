import React from 'react'
import './Complain.css';
import { Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Frame from './assets/Frame.svg';
import Admin from './assets/Admin.png'
import ChatAdmin from './assets/ChatAdmin.png';
import User from './assets/User.png';
import Navigation from '../Navigation/Navigation';

const UserComplain = () => {
    return (
        <div>
            <Navigation />


            <div style={{ marginTop: "10px" }}>
                <div className='row g-0'>
                    {/* LEFT SIDE */}
                    <div className='col-sm-4'>
                        <Card style={{ width: '18rem', height: '470px', backgroundColor: 'black' }} className='left-side'>
                            <div className='row'>
                                <div className='col'>
                                    <Link to='/admin-complain'>
                                        <img src={Admin} alt="" />
                                    </Link>
                                </div>
                                <div className='col'>
                                    <p className='text-admin'>
                                        Admin
                                    </p>
                                    <p className='text-muted-admin'>
                                        Yes, Is there anything I can help
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    {/* LEFT SIDE */}

                    {/* RIGHT SIDE */}
                    <div className='col-sm-8'>
                        <div className='container-chat'>
                            <div className='card-footer'>
                                <div style={{ float: "right", marginTop: "350px" }}>
                                    <img src={User} alt="" />
                                </div>
                                <div style={{ marginLeft: "-10px", marginTop: "430px", marginBottom: "-70px" }}>
                                    <img src={ChatAdmin} alt="" />
                                </div>
                                <Form className='right-side'>
                                    <Form.Group className="mb-3" controlId="formBasicChat">
                                        <Form.Control type="text" placeholder="Send Message"
                                            style={{ height: "50px", marginTop: "20px", backgroundColor: "rgb(48, 47, 47)" }} />
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT SIDE */}
                </div>
            </div>
        </div>
    )
}

export default UserComplain
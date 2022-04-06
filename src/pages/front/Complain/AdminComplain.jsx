import React from 'react'
import './Complain.css';
import { Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Frame from './assets/Frame.svg';
import Egi from './assets/egi.png'
import Beach from './assets/beach.png';
import ChatUser from './assets/ChatUser.png';
import NavigationAdmin from '../NavigationAdmin/NavigationAdmin'

const AdminComplain = () => {
    return (
        <div>
            <NavigationAdmin />

            {/* LEFT SIDE */}
            <div style={{ marginTop: "10px" }}>
                <div className='row g-0'>
                    {/* LEFT SIDE */}
                    <div className='col-sm-4'>
                        <Card style={{ width: '18rem', height: '470px', backgroundColor: 'black' }} className='left-side'>
                            <div className='row'>
                                {/* Egi */}
                                <div className='chat'>
                                    <div className='col'>
                                        <img src={Egi} alt="" />
                                    </div>
                                    <div className='col'>
                                        <p className='text-admin'>
                                            egi_lol
                                        </p>
                                        <p className='text-muted-admin'>
                                            Hello Admin, I Need Your Help
                                        </p>
                                    </div>
                                </div>
                                {/* Egi */}

                                {/* Beach */}
                                <div className='chat' style={{ marginTop: "-50px" }}>
                                    <div className='col'>
                                        <img src={Beach} alt="" />
                                    </div>
                                    <div className='col'>
                                        <p className='text-admin'>
                                            beach_lover
                                        </p>
                                        <p className='text-muted-admin'>
                                            Hello Admin, This Problem Product to Me
                                        </p>
                                    </div>
                                </div>
                                {/* Beach */}
                            </div>
                        </Card>
                    </div>
                    {/* LEFT SIDE */}

                    {/* RIGHT SIDE */}
                    <div className='col-sm-8'>
                        <div className='container-chat'>
                            <div className='card-footer'>
                                <div style={{ marginLeft: "-10px", marginTop: "430px", marginBottom: "-70px" }}>
                                    <img src={ChatUser} alt="" />
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

export default AdminComplain
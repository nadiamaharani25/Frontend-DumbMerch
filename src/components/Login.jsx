import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Frame from './assets/Frame.svg';
import cssModules from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
// import loginStyle from '../styles/LoginStyle.css';
// import React, { useState } from 'react';

const styles = {
    mainContainer: {
        marginTop: '150px',
    },

    container: {
        width: '70%',
    },

    img: {
        width: '250px',
    },

    formInput: {
        backgroundColor: 'rgb(48, 47, 47)',
        color: 'white',
    },

    Link: {
        textDecoration: 'none',
        color: 'white',
    },
};

function Login() {

    const navigate = useNavigate();

    const handleNavigateToHomepage = () => {
        navigate('/');
    };

    return (

        <div className='mainContainer' style={styles.mainContainer}>
            <div className='container' style={styles.container}>
                <div className={cssModules.card}>
                    <div className='row g-0'>

                        {/* FRAME */}
                        <div className='col-md-8'>
                            <div className={cssModules.leftSide}>
                                <div className={cssModules.box}>
                                    <div >
                                        <img src={Frame} alt="" style={styles.img} />
                                    </div>
                                    <div>
                                        <h1 className={cssModules.cardTitle}>Easy, Fast and Reliable</h1>
                                        <p className={cssModules.cardText}>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <b>Indonesia.</b></p>
                                    </div>
                                    <div className={cssModules.button}>
                                        <span className={cssModules.btnLogin}>
                                            <Button variant="danger" type='btn btn-sm'
                                                style={{ width: "120px" }}>
                                                <Link to="/login" style={styles.Link}>Login</Link></Button>
                                        </span>
                                        <span>
                                            <Button variant="none" style={{ color: "white" }}>
                                                <Link to="/register" style={styles.Link}>Register</Link></Button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FRAME */}


                        {/* FORM */}
                        <div className='col-md-4'>
                            <Form style={{
                                width: "100%",
                                backgroundColor: "rgb(36, 36, 36)",
                                padding: "20px",
                                margin: "auto",
                                marginTop: "35px",
                                marginBottom: "30px",
                                borderRadius: "5px"
                            }}>
                                <h2 className="text-start">Login</h2>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" className="formInput" style={styles.formInput} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" className="formInput" style={styles.formInput} />
                                </Form.Group>

                                <div className='d-grid gap-2'>
                                    <Button variant="danger" type="button" onClick={handleNavigateToHomepage} className={cssModules.btnLogin}>
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </div>
                        {/* FORM */}

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
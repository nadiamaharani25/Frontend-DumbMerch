import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Frame from './assets/Frame.svg';
import cssModules from './Register.module.css';
import { Link } from 'react-router-dom';

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

// function Register() {

//     const navigate = useNavigate();

//     const handleNavigateToLogin = () => {
//         navigate('/login');
//     };

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: '',
            email: '',
            password: '',
        };
    }

    handleOnChange = (e) => {
        // setState here
        // console.log(e.target.value); 
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        // print state value with console.log
        console.log(this.state);
    };


    render() {
        return (

            <div className='mainContainer' style={styles.mainContainer}>
                <div className='container' style={styles.container}>
                    <div className={cssModules.card} style={{ height: "600px" }}>
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
                                            {/* <p style={{ marginTop: "-17px" }}>the biggest merchandise in <b>Indonesia.</b></p> */}
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
                                <Form onSubmit={this.handleOnSubmit} style={{
                                    width: "100%",
                                    backgroundColor: "rgb(36, 36, 36)",
                                    padding: "20px",
                                    margin: "auto",
                                    marginTop: "35px",
                                    marginBottom: "30px",
                                    borderRadius: "8px"
                                }}>
                                    <h2 className="text-start">Register</h2>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Control type="text" placeholder="Name" className='formInput'
                                            onChange={this.handleOnChange}
                                            value={this.state.fullname}
                                            name="fullname"
                                            style={styles.formInput} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email" className='formInput'
                                            onChange={this.handleOnChange}
                                            value={this.state.email}
                                            name="email"
                                            style={styles.formInput} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" className='formInput'
                                            onChange={this.handleOnChange}
                                            value={this.state.password}
                                            name="password"
                                            style={styles.formInput} />
                                    </Form.Group>
                                    <div className='d-grid gap-2'>
                                        <Button variant="danger" type="submit" className={cssModules.btnLogin}>
                                            Register
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                            {/* FORM */}

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Register
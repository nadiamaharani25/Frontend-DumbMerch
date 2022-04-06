import React from 'react'
import './Profile.css';
// import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Frame from './assets/Frame.svg';
import Avatar from './assets/Avatar.png';
import Mouse from './assets/mouse.png'
import Navigation from '../Navigation/Navigation';

const Profile = () => {
    return (
        <div>
            <Navigation />

            <div>
                <div className='row g-0'>
                    {/* COL */}
                    <div className='col-md-6'>
                        {/* CARD */}
                        <div style={{ marginTop: "120px" }}>
                            {/* CARD-PROFILE */}
                            <div className='text-profile'>
                                <h3>My Profile</h3>
                            </div>
                            <div className='card-profile' style={{ backgroundColor: "black", marginBottom: "-90px" }}>
                                <div className='row g-0'>
                                    <div className='col'>
                                        <img src={Avatar} className='img-fluid rounded-start' alt=""
                                            style={{ width: "290px", height: "450px" }} />
                                    </div>

                                    <div className='col'>
                                        <div className='card-body-profile'>
                                            <div className='name'>
                                                <p className='card-text' style={{ color: "red" }}>Name:</p>
                                                <p className='card-text' style={{ marginTop: "-15px" }}>Yoseph</p>
                                            </div><br />

                                            <div className='email'>
                                                <p className='card-text' style={{ color: "red" }}>Email:</p>
                                                <p className='card-text' style={{ marginTop: "-15px" }}>yosepgans@gmail.com</p>
                                            </div><br />

                                            <div className='phone'>
                                                <p className='card-text' style={{ color: "red" }}>Phone:</p>
                                                <p className='card-text' style={{ marginTop: "-15px" }}>083896833122</p>
                                            </div><br />

                                            <div className='gender'>
                                                <p className='card-text' style={{ color: "red" }}>Gender:</p>
                                                <p className='card-text' style={{ marginTop: "-15px" }}>Male</p>
                                            </div><br />

                                            <div className='address'>
                                                <p className='card-text' style={{ color: "red" }}>Address:</p>
                                                <p className='card-text' style={{ marginTop: "-15px", textAlign: "justify" }}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti quia
                                                    veritatis placeat odit dolorum iusto voluptatem.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* CARD-PROFILE */}
                        </div>
                        {/* CARD */}
                    </div>
                    {/* COL */}

                    {/* COL */}
                    <div className='card-transaction mb-2' style={{ maxWidth: '580px', marginTop: "110px" }}>
                        <div className='card-header' style={{ backgroundColor: "black" }}>
                            <h3 style={{ marginBottom: "30px" }}>My Transaction</h3>
                        </div>
                        < div className='row g-0' >
                            <div className='col'>
                                <img src={Mouse} className='img-fluid-mouse rounded-start' alt="" />
                            </div>

                            <div className="col">
                                <div className='card-body-transaction'>
                                    <h5 className='card-title'>
                                        <Link to='/list-category' style={{ textDecoration: "none", color: "red" }}>Mouse</Link>
                                    </h5>
                                    <p className='card-text fw-bold' style={{ color: "red" }}>Saturday,
                                        <small className='text-date'> 14 Juli 2021</small></p>
                                    <p className='card-text'>Price : Rp.500.000</p>
                                    <div>
                                        <p className='card-text fw-bold' style={{ marginTop: "20px" }}>Sub Total : Rp.500.000</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <img src={Frame} alt="" className='img-transaction' />
                            </div>
                        </div>
                    </div>
                    {/* COL */}
                </div>
            </div>
        </div>
    )
}

export default Profile
import React from 'react'
import './Homepage.css';
import Navigation from '../Navigation/Navigation';
import CardProduct from '../CardProduct/CardProduct';
// import { Switch, Route, Link } from 'react-router-dom';


function Homepage() {

    return (
        <div>
            <Navigation />

            {/* CONTAINER */}
            <div>
                <div className='container-card'>
                    <div className='d-flex flex-wrap'>
                        <CardProduct />
                    </div>
                </div>
            </div>
            {/* CONTAINER */}
        </div>
    )
}

export default Homepage
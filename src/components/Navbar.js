import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../alderlogo.png';


function Navbar() {


    return (
        <>
        <div className='navbar'>
            <div className='nav-logo'>
                <a href='/'><img src={logo} className='alderlogo' alt='logo'/></a>
            </div>
            <div className='nav-links'>
                <ul>
                <Link to='/' className='nav-bars' >
                    Home
                </Link>
                <a target="_blank" rel="noopener noreferrer" className='nav-bars' href="https://learn.alder.com/">Alder Wiki</a>
                <Link to='/sensors' className='nav-bars' >
                    Sensors
                </Link>
                <Link to='/panels' className='nav-bars' >
                    Panels
                </Link>
                <Link to='/cameras' className='nav-bars' >
                    Cameras
                </Link>
                <Link to='/zwave' className='nav-bars' >
                    Z-Wave
                </Link>
                <Link to='/apps' className='nav-bars' >
                    Apps
                </Link>
                <Link to='/other' className='nav-bars' >
                    Other
                </Link>\
                </ul>
            </div>
        </div>
    </>
    );
}

export default Navbar

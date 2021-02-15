import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {SidebarData} from './NavbarData';
import logo from '../alderlogo.png';

function Navbar() {

const [sidebar, setSidebar] = useState(false)
const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <div className='navbar'>
            <img src={logo} className='alderlogo' alt='logo'/>
            
            <Link to='/' className='nav-bars' onClick={showSidebar}>
                Home
            </Link>
            <Link to='/wiki' className='nav-bars' onClick={showSidebar}>
                Alder Wiki
            </Link>
            <Link to='/sensors' className='nav-bars' onClick={showSidebar}>
                Sensors
            </Link>
            <Link to='/panels' className='nav-bars' onClick={showSidebar}>
                Panels
            </Link>
            <Link to='/cameras' className='nav-bars' onClick={showSidebar}>
                Cameras
            </Link>
            <Link to='zwave' className='nav-bars' onClick={showSidebar}>
                Z-Wave
            </Link>
            <Link to='apps' className='nav-bars' onClick={showSidebar}>
                Apps
            </Link>
            <Link to='other' className='nav-bars' onClick={showSidebar}>
                Other
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                {SidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </>
    );
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom';
import './TwogigSidebar.css'

function TwogigSidebar() {



    return (
        <div className='twogig-sidebar-wrapper'>
            <h1>2GIG Panel</h1>
            <ul className='bu-wrapper'>
                <h2>Basic Usage</h2>
                <Link to='/2gig/arm-disarm' className='tg-bars' >
                    <li>
                        Arm/Disarm
                    </li>
                </Link>
                    <li>
                        Trouble Beeps
                    </li>
                    <li>
                        Emergency Buttons
                    </li>
                <h2>Toolbox</h2>
                    <li>
                        Add User Codes
                    </li>
                    <li>
                        Change/Remove User Code
                    </li>
                    <li>
                        Brightness
                    </li>
                    <li>
                        Backlight Timeout
                    </li>
                    <li>
                        Clean Screen
                    </li>
                    <li>
                        Calibrate Touch Screen
                    </li>

                    <li>
                        Date Settings
                    </li>
                    <li>
                        Time Settings
                    </li>
                    <li>
                        Volume
                    </li>
                    <li>
                        Chime Setup
                    </li>
                    <li>
                        System History
                    </li>
                    <li>
                        System Info
                    </li>
                    <li>
                        Cell Test
                    </li>
                    <li>
                        Reset Panel
                    </li>
                <h2>Panel Issues</h2>
                    <li>
                        Panel Communication Issuse
                    </li>
                    <li>
                        Power Faliure
                    </li>
                    <li>
                        Panel Low Battery
                    </li>
                <h2>Other</h2>
                    <li>
                        Programming Questions
                    </li>
            </ul>
            &nbsp;

        </div>
    )
}

export default TwogigSidebar

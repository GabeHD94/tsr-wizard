import React from 'react';
import './Home.css';
import DWSensorsvg from '../../../svgs/door-open-solid.svg'
import Keyfobsvg from '../../../svgs/key-solid.svg'
import Smokesvg from '../../../svgs/smog-solid.svg'
import Camerasvg from '../../../svgs/video-solid.svg'
import CloudSmokesvg from '../../../svgs/cloud-solid.svg'
import Motionsvg from '../../../svgs/running-solid.svg'
import Pendantsvg from '../../../svgs/clinic-medical-solid.svg'
import Panelsvg from '../../../svgs/mobile-alt-solid.svg'
import Glassbreaksvg from '../../../svgs/sound-bars-pulse.svg'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Common Equipment</h1>
            <ul className='common-wrapper'>
                <Link to='/2gig' className='common-bars' >
                    <li className='common-links'>
                        <img src = {Panelsvg} alt='gig-panel' height="87" width="87"></img>
                            2GIG Panel
                    </li>
                </Link>
                <li className='common-links'>
                    <img src = {Panelsvg} alt='simple-panel' height="87" width="87"></img>
                        Alder Simple Panel
                </li>
                <li className='common-links'>
                    <img src = {DWSensorsvg} alt='door-window' height="87" width="87"></img>
                        Alder Simple Door/Window Sensor
                </li>
                <li className='common-links'>
                        <img src = {Motionsvg} alt='motion-detector' height="87" width="87"></img>
                        Alder Simple Motion Detector
                </li>
                <li className='common-links'>
                    <img src = {Glassbreaksvg} alt='glass-break' height="87" width="87"></img>
                        Alder Simple Glass Break Detector
                </li>
                <li className='common-links'>
                    <img src = {Keyfobsvg} alt='keyfob' height="87" width="87"></img>
                        Alder Simple Keyfob
                </li>
                <li className='common-links'>
                    <img src = {Pendantsvg} alt='medical-pendant' height="87" width="87"></img>
                        Alder Simple Medical 
                </li>
                <li className='common-links'>
                    <img src = {CloudSmokesvg} alt='smoke-detector' height="87" width="87"></img>
                    Smoke Detector
                </li>
                <li className='common-links'>   
                    <img src = {Smokesvg} alt='carbon-detector' height="87" width="87"></img>
                    Carbon Monoxide Detector
                </li>
                <li className='common-links'>
                    <img src = {Camerasvg} alt='yi-camera' height="87" width="87"></img>
                    YI indoor Camera
                </li>
                <li className='common-links'>
                    <img src = {Camerasvg} alt='kami-camera' height="87" width="87"></img>
                    Kami Outdoor Camera
                </li>
            </ul>
        </div>
    )
}

export default Home

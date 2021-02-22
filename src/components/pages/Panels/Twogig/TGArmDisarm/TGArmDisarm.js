import React from 'react';
import { useSpring, animated } from 'react-spring';
import TGPanel from '../../../../../pictures/2GIG-Panel.png';
import TGPanelScreen from '../../../../../pictures/2GIG-SecandServ.png';
import TGPanelArmMenu from '../../../../../pictures/2GIG-ArmMenuStatus.png';
import TGPanelStayAway from '../../../../../pictures/2GIG-ArmStayorAway.png';
import TGArming from '../../../../../pictures/2GIG-Arming.png';
import './TGArmDisarm.css';

function TGArmDisarm() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })

    // this is the array for the step by step photos
    const twogigPics = [{
        photo: { TGPanel },
        text: "first project"
    },
    {
        photo: { TGPanelScreen },
        text: "second project"
    },
    {
        photo: { TGPanelArmMenu },
        text: "third project"
    },
    {
        photo: { TGPanelStayAway },
        text: "third project"
    },
    {
        photo: { TGArming },
        text: "third project"
    }
    ]


    return (
        <div className='tg-arm-disarm'>
            <animated.div style={props}>
                <h1>
                    Arm/Disarm
                </h1>
                <img src={TGPanel} alt="fireSpot" />
                <div className="TG">

                </div>



                <ol className="tg-arm-disarm-steps">
                    <li>Press the Home button (the arrow pointing up) on the panel.</li>
                    <li>Press "Security".</li>
                    <li>Press "Arm".</li>
                    <li>Select "Stay" or "Away".
                    <ul className="list-indent">
                            <li>Arming "Stay" will activate all sensors except for motion detectors.</li>
                            <li>Arming "Away" will activate all sensors.</li>
                        </ul>
                    </li>
                    <li>The system will count down. Once the timer reaches 0, the system is armed.</li>
                    <li>Disarming the System:
                    <ul className="list-indent">
                            <li>Press the Home button (Arrow Pointing Up) on the panel.</li>
                            <li>Press "Security".</li>
                            <li>Press "Disarm".</li>
                            <li>Enter the 4-digit code.</li>
                        </ul>
                    </li>
                </ol>
            </animated.div>
        </div>
    )
}

export default TGArmDisarm

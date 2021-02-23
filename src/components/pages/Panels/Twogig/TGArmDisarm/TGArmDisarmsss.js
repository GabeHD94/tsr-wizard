import React, { useState } from 'react';
import TGArmDisarm from './TGArmDisarm'
import { useSpring, animated } from 'react-spring';
import './TGArmDisarmSS.css';





function TGArmDisarmSSS) {

    const responses = [
        {
            id: 1,
            imageurl: ("../../../../../pictures/2GIG-Panel.png"),
            stepText: "Press the Home button (Arrow Pointing Up) on the panel.",
            buttonOptions: [
                { nextText: "Next" },
            ],
            notes: [
            ],
        },
        {
            id: 2,
            stepText: "Press 'Security'",
            buttonOptions: [
                { backText: "Back" },
                { nextText: "Next" },
            ],
            notes: [
            ],
        },
        {
            id: 3,
            stepText: "Press 'Arm'",
            buttonOptions: [
                { backText: "Back" },
                { nextText: "Next" },
            ],
            notes: [
            ],
        },
        {
            id: 4,
            stepText: "Select 'Stay' or 'Away'",
            buttonOptions: [
                { backText: "Back" },
                { nextText: "Next" },
            ],
            notes: [
                { note: "Arming 'Stay' will activate all sensors except for motion detectors." },
                { note: "Arming 'Away' will activate all sensors." },
            ],
        },
        {
            id: 5,
            stepText: "The system will count down. Once the timer reaches 0, the system is armed.",
            buttonOptions: [
                { backText: "Back" },
                { nextText: "Next" },
            ],
            notes: [
            ],
        },
        {
            id: 6,
            stepText: "Disarming the System:",
            buttonOptions: [
                { backText: "Back" },
            ],
            notes: [
                { note: "Press the Home button (Arrow Pointing Up) on the panel." },
                { note: "Press 'security'." },
                { note: "Press 'Disarm'." },
                { note: "Enter the 4-digit code." },
            ],
        },
    ]

    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    const [mode, setMode] = useState(true)

    const [currentStep, setCurrentStep] = useState(0);

    const handleNextButton = () => {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
    }

    const handleBackButton = () => {
        const nextStep = currentStep - 1;
        setCurrentStep(nextStep);
    }

    return (
        <div className="tg-container">
            {mode ?

                <div className='tg-arm-disarm'>
                    <animated.div style={props}>
                        <div className="tg-headers">
                            <h1>Arm/Disarm</h1>
                            <h3 className="tg-mode">Step by Step Mode</h3>
                        </div>
                        <h2>{responses[currentStep].stepText}</h2>
                        <div className="tg-arm-disarm-steps">
                            {responses[currentStep].notes.map((notePoints) => (
                                <li>{notePoints.note}</li>
                            ))}
                            <h3>{responses[currentStep].addnotes}</h3>
                        </div>



                        <div className="back-next-btn">
                            {responses[currentStep].buttonOptions.map((buttonOption) => (
                                <button onClick={() => { handleBackButton() }}>{buttonOption.backText}</button>
                            ))}
                            {responses[currentStep].buttonOptions.map((buttonOption) => (
                                <button onClick={() => { handleNextButton() }}>{buttonOption.nextText}</button>
                            ))}
                        </div>
                        <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Overview Mode</h2>
                    </animated.div>
                </div>
                : <TGArmDisarm />}
        </div>
    );
}
export default TGArmDisarmSSS



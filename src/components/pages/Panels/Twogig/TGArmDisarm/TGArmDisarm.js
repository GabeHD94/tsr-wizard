import React from 'react'
import {useSpring, animated} from 'react-spring'
import './TGArmDisarm.css'

function TGArmDisarm() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (
        <div className='tg-arm-disarm'>
            <animated.div style={props}>
                <h1>
                    Arm/Disarm
                </h1>
            
            </animated.div>
        </div>
    )
}

export default TGArmDisarm

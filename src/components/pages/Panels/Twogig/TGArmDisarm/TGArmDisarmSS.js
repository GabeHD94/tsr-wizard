import React, { useState } from 'react';
import TGArmDisarm from './TGArmDisarm'
import { useSpring, animated } from 'react-spring';


function TGArmDisarmSS() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    const [mode, setMode] = useState(true)

    return (
        <div>
            {mode ?
                <animated.div style={props}>
                    <h1>Hi</h1>
                    <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Overview Mode</h2>
                </animated.div>
                : <TGArmDisarm />}
        </div>
    )
}

export default TGArmDisarmSS

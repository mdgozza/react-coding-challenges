import * as React from 'react'
import {ClassRocket, FunctionalRocket} from './components/Rocket/'
import LaunchPad from './components/LaunchPad';

export default function Picker(){
    const [Rocket, setRocket] = React.useState(() => ClassRocket);
    const [launch, setLaunch] = React.useState(false);

    function toggleLaunchPad(){

        setRocket(Rocket => Rocket === ClassRocket ? FunctionalRocket : ClassRocket)
    }

    function handleLaunch(){
        setLaunch(!launch)
    }

    return <div>
        <LaunchPad Rocket={Rocket} launch={launch} />
        <div style={{display: "flex"}}>
        <h4 style={{marginRight: "1rem"}}>{Rocket === ClassRocket ? "Class Rocket" : "Functional Rocket"}</h4>
        <button onClick={toggleLaunchPad}>Toggle LaunchPad</button>
        <button style={{marginLeft: "2rem"}} onClick={handleLaunch}>{launch ? 'Stop Launch' : 'Launch'}</button>
        </div>
        
    </div>

}
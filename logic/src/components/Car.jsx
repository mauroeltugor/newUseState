import { useState } from "react";

const Car = () =>{

    const[state, SetState] = useState('Off')

    const on = () => {

        SetState('On');

    }

    const off = () => {
        SetState('Off')
    }

    return(
        <div>
            <div>
                <h1>The car is: {state}</h1>
                <button onClick={on}>Turn on</button>
                <button onClick={off}>Turn off</button>
            </div>
            <hr />
        </div>
    )
}


export default Car;
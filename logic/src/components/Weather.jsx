import { useState } from "react";

const Weather = ({coldImage,sunnyImage}) =>{

    const[weather, setWeather] = useState('')

    const cold = () => {
        setWeather('Cold');
        <img src={coldImage} />
    }

    const sunny = () => {
        setWeather('Sunny');
        <img src={sunnyImage} />
    }

    return(
        <div>
            <div>
                <h1>The weather is: {weather}</h1>
                <button onClick={sunny}>Sunny</button>
                <button onClick={cold}>cold</button>
            </div>
            <hr />
        </div>
    )
}

export default Weather;
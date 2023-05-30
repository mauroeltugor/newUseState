import { useState } from "react";

const Imc = ({weight, height, image}) =>{


    const [calcuWeight, setCalcuWeight] = useState(0);

    const calculate = () => {
        const imc = weight/(height*height);
        setCalcuWeight(imc)
    }



    return(
        <div>
            <div>
                <button onClick={calculate}>Claculate your Imc</button>
                <h1>Your IMC is: {calcuWeight}</h1>
                <img src={image} />
            </div>
            <hr />
        </div>
    )
}

export default Imc;
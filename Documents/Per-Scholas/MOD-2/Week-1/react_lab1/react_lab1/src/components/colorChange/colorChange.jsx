import { useState } from "react";
import './colorChange.css'

const ColorChange = () => {

    const [backgroundColor, setBackgroundColor] = useState('white');

    // create a function to generate a random color in hexadecimal format.
    const randomColor = ()=>{
        const hexadecemal = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0; i<6; i++ ){
            color += hexadecemal[Math.floor(Math.random()*16)];
        }
        return color
    }

    // create event handler function
    const changeBackgroundColor = ()=>{
        const randomColorVariable = randomColor();
        setBackgroundColor(randomColorVariable)
    }

    return (
        <>
            <button style={{backgroundColor: backgroundColor}} onClick={changeBackgroundColor}>change the color</button>
        </>
    )
};

export default ColorChange;

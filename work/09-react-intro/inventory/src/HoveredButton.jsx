import { useState } from "react";
import './HoveredButton.css'

function HoveredButton({ onClick, name, disabled }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button onClick={ onClick }
        onMouseEnter={() => {setIsHovered(true)}}
        onMouseLeave={() => {setIsHovered(false)}}
        disabled={disabled}
        className={`animated-button ${isHovered ? 'hovered':''}`}>
            {name}
        </button>
    );

};


export default HoveredButton;
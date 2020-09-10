import React from "react";
import {ReactComponent as Solid} from "./solid.svg";
import {ReactComponent as Outline} from "./outline.svg";
import "./StarHalf.css";

function StarHalf(props) {
    let classes = `
        ${props.isFlipped && "star-half--flipped"}
        disable-pointer-events
        star-half__svg
    `;

    function handleMouseOver() {
        let val = props.halfIndex === 0 ? 0.5 : 1;
        props.updateHoverStars(val, props.parentIndex);
    }
    
    function handleClick() {
        let val = props.halfIndex === 0 ? 0.5 : 1;
        props.updateSavedStars(val, props.parentIndex);
    }

    return (
        <span className="star-half" onMouseOver={handleMouseOver} onClick={handleClick}>
            {props.isFilled 
            ? <Solid className={classes} /> 
            : <Outline className={classes} />}
        </span>
    )
}

export default StarHalf;
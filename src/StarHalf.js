import React from "react";
import {ReactComponent as Solid} from "./solid.svg";
import {ReactComponent as Outline} from "./outline.svg";
import "./StarHalf.css";

function StarHalf(props) {
    function handleClick() {
        let val = props.halfIndex === 0 ? 0.5 : 1;
        props.updateSavedStars(val, props.parentIndex);
    }

    let classes = props.isFlipped ? "StarHalf-flipped" : "";
    return (
        <span className="StarHalf">
            {props.isFilled ? <Solid className={classes} onClick={handleClick}/> : <Outline className={classes} onClick={handleClick}/>}
        </span>
    )
}

export default StarHalf;
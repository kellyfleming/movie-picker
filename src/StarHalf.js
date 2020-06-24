import React from "react";
import {ReactComponent as Solid} from "./solid.svg";
import {ReactComponent as Outline} from "./outline.svg";

function StarHalf(props) {
    return (
        <span>
            {props.isFilled ? <Solid /> : <Outline />}
        </span>
    )
}

export default StarHalf;
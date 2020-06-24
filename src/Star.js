import React from "react";
import StarHalf from "./StarHalf";
function Star(props) {
    return (
        <span>
            <StarHalf isFilled={props.value > 0} isFlipped={false} />
            <StarHalf isFilled={props.value === 1} isFlipped={true} />
        </span>
    );
}

export default Star;
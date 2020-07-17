import React from "react";
import StarHalf from "./StarHalf";
function Star(props) {
    return (
        <span>
            <StarHalf
                isFilled={props.value > 0}
                isFlipped={false}
                updateSavedStars={props.updateSavedStars}
                updateHoverStars={props.updateHoverStars}
                halfIndex={0}
                parentIndex={props.pIndex}
            />
            <StarHalf
                isFilled={props.value === 1}
                isFlipped={true}
                updateHoverStars={props.updateHoverStars}
                updateSavedStars={props.updateSavedStars}
                halfIndex={1}
                parentIndex={props.pIndex}
            />
        </span>
    );
}

export default Star;
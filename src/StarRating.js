import React, {useState} from "react";
import Star from "./Star";
import useToggle from "./hooks/useToggle";

function StarRating(props) {
    let numStars = 5;
    let [savedStars, setSavedStars] = useState(generateStars(props.savedValue));
    let [hoverStars, setHoverStars] = useState(Array(numStars).fill(0));
    let [isHovering, toggleIsHovering] = useToggle(false);

    function generateStars(val) {
        let half = val % 1;
        let whole = val - half;
        let stars = Array(numStars).fill(0);
        let i = 0;

        while (whole !== 0) {
            stars[i] = 1;
            whole--;
            i++;
        }
        if (i < 5) {
            stars[i] = half;
        }
        return stars;
    }

    function updateSavedStars(starValue, starIndex) {
        let updatedStars = savedStars.map((val, index) => {
            if (index < starIndex) {
                return 1;
            } else if (index === starIndex) {
                return starValue;
            } else {
                return 0;
            }
        });
        let total = updatedStars.reduce((t, star) => t + star, 0);
        setSavedStars(updatedStars);
        props.setRating(total);
    }

    function generateSVGArray(arr) {
        return arr.map((val, index) => (
            <Star
                pIndex={index}
                value={val}
                key={index}
                updateSavedStars={updateSavedStars}
             />
        ));
    }

    return (
        <div>
            <span>
                <span></span>
            </span>
            <div>
                {generateSVGArray(savedStars)}
            </div>
        </div>
    );
}

export default StarRating;
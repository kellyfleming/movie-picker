import React, {useState, useEffect, useCallback} from "react";
import Star from "./Star";
import {addClass, removeClass} from "./utility";
import "./StarRating.css";

function StarRating(props) {
    let numStars = 5;

    const generateStars = useCallback(
        (val) => {
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
        }, [numStars]
    );

    useEffect(() => {
        setSavedStars(generateStars(props.savedValue));
    }, [props.savedValue, generateStars]);

    let [savedStars, setSavedStars] = useState(generateStars(props.savedValue));
    let [hoverStars, setHoverStars] = useState(Array(numStars).fill(0));

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
        props.handleRating(total);
    }

    function updateHoverStars(starValue, starIndex) {
        let updatedStars = hoverStars.map((val, index) => {
            if (index < starIndex) {
                return 1;
            } else if (index === starIndex) {
                return starValue;
            } else {
                return 0;
            }
        });
        setHoverStars(updatedStars);
    }

    function clearHoverStars() {
        addClass("#hover", "hide");
        removeClass("#hover", "show");
        addClass("#saved", "show");
        removeClass("#saved", "hide");
        setHoverStars(Array(numStars).fill(0));
        
    }

    function handleEnter() {
        addClass("#saved", "hide");
        removeClass("#saved", "show");
        addClass("#hover", "show");
        removeClass("#hover", "hide");
    }

    function generateSVGArray(arr) {
        return arr.map((val, index) => (
            <Star
                pIndex={index}
                value={val}
                key={index}
                updateSavedStars={updateSavedStars}
                updateHoverStars={updateHoverStars}
             />
        ));
    }

    return (
        <div className="star-rating--container flex-row">
            <span className="clear" onClick={props.clearSavedRating}>
                <span className="fas fa-ban"></span>
            </span>
            <div onMouseEnter={handleEnter} onMouseLeave={clearHoverStars}>
                <div id="saved" className="show star-rating--saved">
                    {generateSVGArray(savedStars)}
                </div>
                <div id="hover" className="hide star-rating--hovering">
                    {generateSVGArray(hoverStars)}
                </div>
            </div>
        </div>
    );
}

export default StarRating;
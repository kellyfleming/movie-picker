import React from "react";
import StarRating from "./StarRating";
import "./Interaction.css";
import useLocalStorageToggle from "./hooks/useLocalStorageToggle";
import useLocalStorageState from "./hooks/useLocalStorageState";

function Interaction(props) {
    let {likedKey, watchedKey, ratingKey} = props.keys;
    let [isLiked, toggleisLiked] = useLocalStorageToggle(likedKey, false);
    let [hasSeen, toggleHasSeen] = useLocalStorageToggle(watchedKey, false);
    let [rating, setRating] = useLocalStorageState(ratingKey, 0);
    let likeToggleClasses = `${isLiked ? "liked fas" : "unliked far"} fa-heart`;
    let seenToggleClasses = `${hasSeen ? "seen fas" : "notSeen far"} fa-eye`;

    return (
        <div className="Interaction-wrapper">
            <div className="Interaction-toggles">
                <div className="Interaction-icon" onClick={toggleHasSeen}>
                    <span id="eye" className={seenToggleClasses}></span>
                    <span className="labelText">{hasSeen ? "Seen" : "Seen?"}</span>
                </div>
                <div className="Interaction-icon" onClick={toggleisLiked}>
                    <span id="heart" className={likeToggleClasses}></span>
                    <span className="labelText">{isLiked ? "Liked" : "Like?"}</span>
                </div>
            </div>
            <StarRating savedValue={rating} setRating={setRating}/>
        </div>
    );
}

export default Interaction;
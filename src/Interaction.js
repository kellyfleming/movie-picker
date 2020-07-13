import React, {useState, useEffect} from "react";
import StarRating from "./StarRating";
import "./Interaction.css";
import {getLocal, setLocal} from "./utility";

function Interaction(props) {
    let {likedKey, watchedKey, ratingKey} = props.keys;

    if (!getLocal(likedKey)) {
        setLocal(likedKey, false);
    }

    if (!getLocal(watchedKey)) {
        setLocal(watchedKey, false);
    }

    if (!getLocal(ratingKey)) {
        setLocal(ratingKey, 0);
    }
    
    let [isLiked, setIsLiked] = useState(JSON.parse(getLocal(likedKey)));
    let [hasSeen, setHasSeen] = useState(JSON.parse(getLocal(watchedKey)));
    let [rating, setRating] = useState(JSON.parse(getLocal(ratingKey)));

    useEffect(() => {
        setIsLiked(JSON.parse(getLocal(likedKey)));
        setHasSeen(JSON.parse(getLocal(watchedKey)));
        setRating(JSON.parse(getLocal(ratingKey)));
    }, [likedKey, watchedKey, ratingKey]);

    let likeToggleClasses = `${isLiked ? "liked fas" : "unliked far"} fa-heart`;
    let seenToggleClasses = `${hasSeen ? "seen fas" : "notSeen far"} fa-eye`;

    function toggle(key, setter) {
        let current = JSON.parse(getLocal(key));
        if (current !== null) {
            setLocal(key, !current);
            setter(!current);
        }
    }

    function setSavedRating(val) {
        setLocal(ratingKey, val);
        setRating(val);
    }

    function clearSavedRating() {
        setLocal(ratingKey, 0);
        setRating(0);
    }

    return (
        <div className="Interaction-wrapper">
            <div className="Interaction-toggles">
                <div className="Interaction-icon iconBorder" onClick={() => toggle(watchedKey, setHasSeen)}>
                    <span id="eye" className={seenToggleClasses}></span>
                    <span className="labelText">{JSON.parse(getLocal(watchedKey)) ? "Seen" : "Seen?"}</span>
                </div>
                <div className="Interaction-icon" onClick={() => toggle(likedKey, setIsLiked)}>
                    <span id="heart" className={likeToggleClasses}></span>
                    <span className="labelText">{JSON.parse(getLocal(likedKey)) ? "Liked" : "Like?"}</span>
                </div>
            </div>
            <StarRating savedValue={JSON.parse(getLocal(ratingKey))} setSavedRating={setSavedRating} clearSavedRating={clearSavedRating}/>
        </div>
    );
}

export default Interaction;
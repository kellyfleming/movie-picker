import React, {useState, useEffect} from "react";
import StarRating from "./StarRating";
import "./Interaction.css";
import "./utility.css";
import {getLocal, setLocal, initStorage, toggle} from "./utility";

function Interaction(props) {
    let {likedKey, watchedKey, ratingKey} = props.keys;

    initStorage(likedKey, false);
    initStorage(watchedKey, false);
    initStorage(ratingKey, 0);
    
    let [isLiked, setIsLiked] = useState(JSON.parse(getLocal(likedKey)));
    let [hasWatched, sethasWatched] = useState(JSON.parse(getLocal(watchedKey)));
    let [rating, setRating] = useState(JSON.parse(getLocal(ratingKey)));

    useEffect(() => {
        setIsLiked(JSON.parse(getLocal(likedKey)));
        sethasWatched(JSON.parse(getLocal(watchedKey)));
        setRating(JSON.parse(getLocal(ratingKey)));
    }, [likedKey, watchedKey, ratingKey]);

    let likeToggleClasses = `${isLiked ? "heart--liked fas" : "heart--unliked far"} fa-heart`;
    let seenToggleClasses = `${hasWatched ? "eye--seen fas" : "eye--not-seen far"} fa-eye`;

    function handleLike() {
        if (!hasWatched) {
            toggle(watchedKey, sethasWatched);
        }
        toggle(likedKey, setIsLiked);
    }

    function handleSeen() {
        if (isLiked) {
            toggle(likedKey, setIsLiked);
        }
        if (rating !== 0 || rating !== null) {
            clearSavedRating();
        }
        toggle(watchedKey, sethasWatched);
    }

    function handleRating(val) {
        if (!hasWatched) {
            toggle(watchedKey, sethasWatched);
        }
        setLocal(ratingKey, val);
        setRating(val);
    }

    function clearSavedRating() {
        setLocal(ratingKey, 0);
        setRating(0);
    }

    return (
        <div className="interaction--wrapper flex-col">
            <div className="interaction--toggles flex-row">
                <div className="icon--container flex-col" onClick={handleSeen}>
                    <span id="eye" className={seenToggleClasses}></span>
                    <span className="icon__label--text-size">{JSON.parse(getLocal(watchedKey)) ? "Seen" : "Seen?"}</span>
                </div>
                <div className="icon--container flex-col" onClick={handleLike}>
                    <span id="heart" className={likeToggleClasses}></span>
                    <span className="icon__label--text-size">{JSON.parse(getLocal(likedKey)) ? "Liked" : "Like?"}</span>
                </div>
            </div>
            <StarRating savedValue={JSON.parse(getLocal(ratingKey))} handleRating={handleRating} clearSavedRating={clearSavedRating}/>
        </div>
    );
}

export default Interaction;
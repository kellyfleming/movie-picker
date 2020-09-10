import React, {useState, useEffect} from "react";
import useToggle from "./hooks/useToggle";
import {getLocal, setLocal, initStorage} from "./utility";
import ReviewForm from "./ReviewForm";
import "./Review.css";
import "./utility.css";

function Review(props) {
    let key = props.reviewKey;
    const placeholder = "";

    initStorage(key, placeholder);

    let [isEditing, toggleIsEditing] = useToggle(false);
    let [reviewText, setReviewText] = useState(getLocal(key));

    useEffect(() => {
        setReviewText(getLocal(key));
    }, [key]);

    function deleteSavedReview() {
        setLocal(key, placeholder);
        setReviewText(placeholder);
    }

    function saveReview(newText) {
        setLocal(key, newText);
        setReviewText(newText);
    }

    function renderReview() {
        if (!isEditing) {
            if (reviewText === placeholder) {
                return <button onClick={toggleIsEditing}>Add Review</button>;
            } else {
                return (
                    <>
                        <div className="review--text">{reviewText}</div>
                        <div className="review__button--container flex-row">
                            <button onClick={toggleIsEditing}>Edit Review</button>
                            <button onClick={deleteSavedReview}>Delete Review</button>
                        </div>
                    </>
                );
            }
        } else {
            return <ReviewForm toggleIsEditing={toggleIsEditing} reviewText={reviewText} saveReview={saveReview} />;
        }
    }

    return (
        <div className="review flex-col">
            {renderReview()}
        </div>
    );
}

export default Review;
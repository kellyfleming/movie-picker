import React, {useState} from "react";
import "./ReviewForm.css";

function ReviewForm(props) {
    let [input, setInput] = useState(props.reviewText);

    function handleChange(evt) {
        setInput(evt.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.saveReview(input);
        props.toggleIsEditing();
    }

    return (
        <form className="review__form" onSubmit={handleSubmit}>
            <textarea className="review__text-area" value={input} onChange={handleChange}></textarea>
            <div className="review__form--button-container flex-row">
                <button className="button button--primary" type="submit">Save Review</button>
                <button className="button button--danger" type="button" onClick={props.toggleIsEditing}>Cancel</button>
            </div>
        </form>
    );
}

export default ReviewForm;
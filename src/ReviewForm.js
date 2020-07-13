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
        <div>
            <form onSubmit={handleSubmit}>
                <textarea value={input} onChange={handleChange}></textarea>
                <button type="submit">Save Review</button>
                <button type="button" onClick={props.toggleIsEditing}>Cancel</button>
            </form>
        </div>
    )
}

export default ReviewForm;
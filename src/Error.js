import React from "react";
import "./Error.css";

function Error() {
    return (
        <div className="error flex-col">
            <h1>Oops, sorry, couldn't find that.</h1>
            <p>Select a film from the dropdown above or click random for a surprise!</p>
        </div>
    );
}

export default Error;
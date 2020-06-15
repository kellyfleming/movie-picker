import React from "react";
import {Link, useLocation} from "react-router-dom";
import {toggleLinkContainer} from "./utility";
import "./Dropdown.css";

function Dropdown(props) {
    let {keys, filmData, randomPath} = props;
    let location = useLocation();

    function getLinks() {
        return keys.map(key => (
        <li>
            <Link to={filmData[key].path}>
                <div>{filmData[key].title}</div>
            </Link>
        </li>
        ));
    }

    function getCurrent() {
        let path = location.pathname;
        let key = path.split("/")[1]; // either "" or path
        if (key === "") {
            return (
                <span>
                    Choose a film
                    <span id="caret" className="fas fa-caret-down"></span>
                </span>
            );
        } else {
            return (
                <span>
                    {filmData[key].title}
                    <span id="caret" className="fas fa-caret-down"></span>
                </span>
            );
        }
    }

    return (
        <div className="Dropdown-container">
            <div className="Button-container">
                <button onClick={toggleLinkContainer}>{getCurrent()}</button>
                <Link to={randomPath}>Random</Link>
            </div>
            <ul className="Link-container hidden">
                {getLinks()}
            </ul>
        </div>
    );
}

export default Dropdown;
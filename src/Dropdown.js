import React from "react";
import {Link, useLocation} from "react-router-dom";
import {toggleLinkContainer, closeLinkContainer} from "./utility";
import {v4 as uuidv4} from "uuid";
import "./Dropdown.css";

function Dropdown(props) {
    let {keys, filmData, randomPath} = props;
    let location = useLocation();
    let path = location.pathname;
    let key = path.split("/")[1]; // either "" or path
    
    function getLinks() {
        return keys.map(key => (
        <li className="link-container__item" key={uuidv4()}>
            <Link to={filmData[key].path} onClick={toggleLinkContainer} className="link-container__link">
                <div>{filmData[key].title}</div>
            </Link>
        </li>
        ));
    }

    function getCurrent() {
        if (key === "" || key === "about" || !(keys.includes(key))) {
            return (
                <span id="dropdownToggleText" onClick={toggleLinkContainer}>
                    Choose a film
                    <span id="caret" className="fas fa-caret-down button--caret"></span>
                </span>
            );
        } else {
            return (
                <span id="dropdownToggleText" onClick={toggleLinkContainer}>
                    {filmData[key].title}
                    <span id="caret" className="fas fa-caret-down button--caret"></span>
                </span>
            );
        }
    }

    return (
        <div className="dropdown--sizing">
            <div className="flex-row">
                <Link to="/about" className="button button--shrink button--default">About</Link>
                <button id="dropdownToggle" className="button button--grow button--primary" onClick={toggleLinkContainer}>{getCurrent()}</button>
                <Link className="button button--shrink button--default" to={randomPath} onClick={closeLinkContainer}>Random</Link>
            </div>
            <ul className="link-container__list hide">
                {getLinks()}
            </ul>
        </div>
    );
}

export default Dropdown;
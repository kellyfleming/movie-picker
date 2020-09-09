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
                    <span className="fas fa-caret-down dropdown__button--caret"></span>
                </span>
            );
        } else {
            return (
                <span id="dropdownToggleText" onClick={toggleLinkContainer}>
                    {filmData[key].title}
                    <span className="fas fa-caret-down dropdown__button--caret"></span>
                </span>
            );
        }
    }

    return (
        <div className="dropdown--sizing">
            <div className="dropdown--flex">
                <Link to="/about" className="dropdown__button dropdown__button--shrink dropdown__button--subdued">About</Link>
                <button id="dropdownToggle" className="dropdown__button dropdown__button--grow dropdown__button--bright" onClick={toggleLinkContainer}>{getCurrent()}</button>
                <Link className="dropdown__button dropdown__button--shrink dropdown__button--subdued" to={randomPath} onClick={closeLinkContainer}>Random</Link>
            </div>
            <ul className="link-container__list dropdown--hidden">
                {getLinks()}
            </ul>
        </div>
    );
}

export default Dropdown;
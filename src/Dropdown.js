import React from "react";
import {Link, useLocation} from "react-router-dom";

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
                    <span className="fas fa-caret-down"></span>
                </span>
            );
        } else {
            return (
                <span>
                    {filmData[key].title}
                    <span className="fas fa-caret-down"></span>
                </span>
            );
        }
    }

    return (
        <div>
            <div>
                <button>{getCurrent()}</button>
                <Link to={randomPath}>Random</Link>
            </div>
            <ul>
                {getLinks()}
            </ul>
        </div>
    );
}

export default Dropdown;
import React from "react";
import {Link} from "react-router-dom";

function Dropdown(props) {
    let {keys, filmData} = props;
    function getLinks() {
        return keys.map(key => (
        <li>
            <Link to={filmData[key].path}>
                <div>{filmData[key].title}</div>
            </Link>
        </li>
        ));
    }

    return (
        <div>
            <div>
                {/* dropdown toggle button */}
                {/* go to random option button */}
            </div>
            <ul>
                {getLinks()}
            </ul>
        </div>
    );
}

export default Dropdown;
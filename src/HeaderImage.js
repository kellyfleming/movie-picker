import React from "react";
import filmData from "./data";
import {useLocation} from "react-router-dom";
import "./HeaderImage.css";

function HeaderImage() {
    let location = useLocation();
    let key = location.pathname.split("/")[1];
    let headerSrc = "";
    if (key && Object.keys(filmData).includes(key)) {
        headerSrc = filmData[key].headerSrc;
    }
    return (

        <span>
            {headerSrc &&
            <div className="header--container">
                <div className="header">
                    <div className="header--image" style={{backgroundImage: `url(${headerSrc})`}}></div>
                </div>
                <div className="header--mask"></div>
            </div>
            }
        </span>
    );
}

export default HeaderImage;
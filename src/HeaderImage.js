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
            <div className="Header-container">
                <div id="header">
                    <div className="Header-image" style={{backgroundImage: `url(${headerSrc})`}}></div>
                </div>
                <div className="Header-mask"></div>
            </div>
            }
        </span>
        // <div className="Header-container">
        //     <div id="header">
        //         {headerSrc && <div className="Header-image" style={{backgroundImage: `url(${headerSrc})`}}></div>}
        //     </div>
        //     <div className="Header-mask"></div>
        // </div>
    );
}

export default HeaderImage;
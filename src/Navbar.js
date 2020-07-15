import React from "react";
import {useLocation} from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import filmData from "./data";

function Navbar(props) {
    let location = useLocation();
    let path = location.pathname.split("/")[1];
    let needGradient = path !== "about" && path !== "";

    return (
        <header className="Navbar-wrapper">
            {needGradient
                ? <div className="Navbar-background">
                    <div className="Navbar-container">
                        <Dropdown keys={Object.keys(filmData)} randomPath={props.randomPath} filmData={filmData} />
                    </div>
                </div>
                : <div className="Navbar-container">
                    <Dropdown keys={Object.keys(filmData)} randomPath={props.randomPath} filmData={filmData} />
                </div>}
        </header>
    );
}

export default Navbar;
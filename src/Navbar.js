import React from "react";
import {useLocation} from "react-router-dom";
import "./Navbar.css";
import "./utility.css";
import Dropdown from "./Dropdown";
import filmData from "./data";

function Navbar(props) {
    let location = useLocation();
    let path = location.pathname.split("/")[1];
    let needGradient = path !== "about" && path !== "";

    return (
        <header className="navbar--wrapper">
            {needGradient
                ? <div className="navbar--background">
                    <div className="navbar--container flex-row">
                        <Dropdown keys={Object.keys(filmData)} randomPath={props.randomPath} filmData={filmData} />
                    </div>
                </div>
                : <div className="navbar--container flex-row">
                    <Dropdown keys={Object.keys(filmData)} randomPath={props.randomPath} filmData={filmData} />
                </div>}
        </header>
    );
}

export default Navbar;
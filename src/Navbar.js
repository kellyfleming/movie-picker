import React from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import filmData from "./data";

function Navbar(props) {
    return (
        <header className="Navbar-wrapper">
            <div className="Navbar-background">
                <Dropdown keys={Object.keys(filmData)} randomPath={props.randomPath} filmData={filmData}/>
            </div>
        </header>
    );
}

export default Navbar;
import React from "react";
import useToggle from "./hooks/useToggle";
import "./Tab.css";

function Tab(props) {
    let data = props.data;
    let [isRole, toggleIsRole] = useToggle(false);

    function renderInfo() {
        return data.map((d, i) => (
            <span className="Tooltip-container" onClick={toggleIsRole}>
                {isRole ? <span>{d.role}</span> : <span>{d.name}</span>}
            </span>
        ));
    }
    return (
        <div className="Data">
            {renderInfo()}
        </div>
    );
}

export default Tab;
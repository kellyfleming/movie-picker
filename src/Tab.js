import React from "react";
import useToggle from "./hooks/useToggle";
import {v4 as uuidv4} from "uuid";
import "./Tab.css";

function Tab(props) {
    let data = props.data;
    let [isRole, toggleIsRole] = useToggle(false);

    function renderInfo() {
        return data.map((d, i) => (
            <span className="Tooltip-container" onClick={toggleIsRole} key={uuidv4()}>
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
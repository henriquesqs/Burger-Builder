import React from "react";

import "./styles.css";

const BuildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="More" onClick={props.added}>More</button>
            <button className="Less" onClick={props.removed} disabled={props.disabled}>Less</button>
        </div>
    );
}

export default BuildControl;
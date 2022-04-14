import React, { useState } from "react";

const Start = ({layout, onChange}) => {

    return (
        <div style={layout.selected ? {boxShadow:'0 0 10px rgb(255 0 0 / 50%)'} : {}} className="chevre" onClick={() => onChange(layout.id)}>
            <p>Go !</p>
            <p>selected : {layout.selected.toString()}</p>
        </div>
    );
};

export default Start;
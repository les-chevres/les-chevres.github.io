import React, { useState } from "react";

const CV = ({id}) => {

    const [CV, setCV] = useState([
        {id: 0, txt:"cv de maxime", img : ""},
        {id: 1, txt:"cv de yassin", img : ""},
    ]);

    if (id != null) {
        return (
            <div>
                <h2>{CV[id].txt}</h2>
            </div>
        );
    } else {
        return null;
    }
    
};

export default CV;
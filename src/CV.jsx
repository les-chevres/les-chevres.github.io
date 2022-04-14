import React, { useState } from "react";

const CV = ({id}) => {
    const CV = useState([
        {id: 1, txt: "cv a malinx"},
        {id: 2, txt: "cv a yassin"},
        {id: 3, txt: "cv a gautier"},
    ])[0];

    if(id != null && id !== 0) {
        return (
            <div>
                <h2>{CV.find(cv => cv.id === id).txt}</h2>
            </div>
        );
    }
}

export default CV;

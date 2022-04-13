import React, { useState } from "react";

const CV = ({id}) => {
    const [CV, setCV] = useState([
        {id: 0, txt: "cv a malinx"},
        {id: 1, txt: "cv a yassin"},
    ]);

    if(id != null){
        return (
            <div>
                <h2>CV de {CV[id].txt}</h2>
            </div>
        );
    }
}

export default CV;
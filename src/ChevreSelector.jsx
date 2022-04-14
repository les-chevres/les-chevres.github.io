import React from "react";
import Chevre from "./Chevre";

const ChevreSelector = ({chevres, handleSelect}) => {

    return (
        <div className="chevreSelector">
            <div className="chevreList">
                {chevres.map(chevre => (
                    <Chevre key={chevre.id} chevre={chevre} onChange={handleSelect} />
                ))}
            </div>
        </div>
    );
};

export default ChevreSelector;
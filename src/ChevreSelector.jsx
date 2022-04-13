import React, { useState } from "react";
import Chevre from "./Chevre";

const ChevreSelector = () => {

    const [chevres, setChevres] = useState([
        {id: 0, selected: false, nom : "Grodet", prenom : "Maxime", age : "22 ans", picture : ""},
        {id: 1, selected: false, nom : "Ait-Mansour", prenom : "Yassin", age : "22 ans", picture : ""},
    ]);

    const handleClick = (id) => {
        const updatedChevres = [...chevres];
        updatedChevres.forEach(chevre => {
            if (chevre.id === id) {
                chevre.selected = true;
            }
            else{
                chevre.selected = false;
            }
        });
        setChevres([...updatedChevres]);
    };

    return (
        <div>
            <h2>Les membres chèvres :</h2>
            <div class="chevreList">
                {chevres.map(chevre => (
                    <Chevre chevre={chevre} onChange={handleClick} />
                ))}
            </div>
        </div>
    );
};

export default ChevreSelector;
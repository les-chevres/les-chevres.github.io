import React, { useState } from "react";
import Chevre from "./Chevre";
import CV from "./CV";

const ChevreSelector = () => {

    const [chevres, setChevres] = useState([
        {id: 0, selected: true, nom : "Grodet", prenom : "Maxime", age : "22 ans", picture : ""},
        {id: 1, selected: false, nom : "Ait-Mansour", prenom : "Yassin", age : "22 ans", picture : ""},
    ]);

    const [selectedChevre, setSelectedChevre] = useState();

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
        setSelectedChevre(id);
    };

    return (
        <div>
            <h2>Les membres chèvres :</h2>
            <div className="chevreList">
                {chevres.map(chevre => (
                    <Chevre key={chevre.id} chevre={chevre} onChange={handleClick} />
                ))}
            </div>
            <CV id={selectedChevre} />
        </div>
    );
};

export default ChevreSelector;
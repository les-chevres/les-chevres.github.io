import React from "react";

const chevre = ({chevre, onChange}) => {

    return (
        <div style={chevre.selected ? {boxShadow:'0 0 10px rgb(255 0 0 / 50%)'} : {}} className="chevre" onClick={() => onChange(chevre.id)}>
            <p> {chevre.nom} {chevre.prenom}</p>
            <p>age : {chevre.age}</p>
            <p>selected : {chevre.selected.toString()}</p>
        </div>
    );
};

export default chevre;
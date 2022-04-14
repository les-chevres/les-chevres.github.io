import React from "react";

const chevre = ({chevre, onChange}) => {

    return (
        <div className="chevre" onClick={() => onChange(chevre.id)}>
            <img style={chevre.selected ? {boxShadow:'0 0 10px rgb(255 0 0 / 50%)'} : {}} src={chevre.picture} alt="pp" />
            <p> {chevre.nom} {chevre.prenom}</p>
            <p>{chevre.age}</p>
        </div>
    );
};

export default chevre;
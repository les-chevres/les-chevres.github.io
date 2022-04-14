import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ChevreSelector from './ChevreSelector';
import CV from "./CV";
import ppmalinx from './images/ppmalinx.png';
import ppchevre from './images/chevre.png';

const App = () => {

    const [chevres, setChevres] = useState([
        {id: 0, selected: true, nom : "Acceuil", prenom : "", age : "", picture : ppchevre},
        {id: 1, selected: false, nom : "Grodet", prenom : "Maxime", age : "22 ans", picture : ppmalinx},
        {id: 2, selected: false, nom : "Ait-Mansour", prenom : "Yassin", age : "22 ans", picture : ""},
    ]);
    

    const [selectedChevre, setSelectedChevre] = useState(0);

    const handleSelect = (id) => {
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
            <ChevreSelector chevres={chevres} handleSelect={handleSelect} />
            <div className='content'>
                <h1>Les Chèvres</h1>
                <h2>Qui sommes nous ?</h2>
                <p>Paragraphe de presentation du collectif de BG que nous sommes !</p>
                <CV id={selectedChevre} />
            </div>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

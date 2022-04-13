import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ChevreSelector from './ChevreSelector';

const App = () => {


    return (
        <div>
            <h1>Les Chèvres</h1>
            <h2>Qui sommes nous ?</h2>
            <p>Paragraphe de presentation du collectif de BG que nous sommes !</p>
            <ChevreSelector />
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

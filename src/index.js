import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ChevreSelector from './ChevreSelector';
import { createRoot } from 'react-dom/client';

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

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

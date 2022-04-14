import React, { useState } from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ChevreSelector from './ChevreSelector';
import { createRoot } from 'react-dom/client';
import Start from './Start';

const App = () => {

    const [layout, setLayout] = useState([
        {id: 0, selected: false},
    ]);

    const handleClick = (id) => {
        if (id === 0) {
            setLayout(1, true);
        }
    };

    if (layout.id === 1) {
        return(
            <div>
                <ChevreSelector />
            </div>
        );
    } else {
        return (
            <div>
                <h1>Les Chèvres</h1>
                <h2>Qui sommes nous ?</h2>
                <p>Paragraphe de presentation du collectif de BG que nous sommes !</p>
                <Start key={layout.id} layout={layout} onChange={handleClick} />
            </div>
        );
    }
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

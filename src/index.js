import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AdsProvider } from './context/AdsContext';

ReactDOM.render(
    <React.StrictMode>
        <AdsProvider>
            <App />
        </AdsProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
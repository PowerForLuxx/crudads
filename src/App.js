import React, { Suspense } from 'react';
import './App.css';
import { AdsProvider } from './context/AdsContext';
const AddAdForm = React.lazy(() => import('./components/AddAdForm'));
const AdsList = React.lazy(() => import('./components/AdsList'));

function App() {
    return (
        <AdsProvider>
            <div className="App">
                <header className="App-header">
                    <h1>Управление объявлениями</h1>
                </header>
                <Suspense fallback={<div>Loading...</div>}>
                    <AddAdForm />
                    <AdsList />
                </Suspense>
            </div>
        </AdsProvider>
    );
}

export default App;

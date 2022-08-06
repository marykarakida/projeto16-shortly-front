import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/styles/reset.css';
import './assets/styles/style.css';

import PageView from './components/PageView';
import HomePage from './pages/HomePage';

function App() {
    return (
        <BrowserRouter>
            <PageView>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </PageView>
        </BrowserRouter>
    );
}

export default App;

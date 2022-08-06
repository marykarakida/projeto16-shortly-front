import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/styles/reset.css';
import './assets/styles/style.css';

import PageView from './layout/PageView';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import UserPage from './pages/UserPage';

function App() {
    return (
        <BrowserRouter>
            <PageView>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signin" element={<SigninPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/user" element={<UserPage />} />
                </Routes>
            </PageView>
        </BrowserRouter>
    );
}

export default App;

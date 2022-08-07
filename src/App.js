import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/styles/reset.css';
import './assets/styles/style.css';

import { UserContextProvider } from './contexts/userContext';

import PageView from './layout/PageView';
import Header from './layout/Header';
import Logo from './components/Logo';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import RankingPage from './pages/RankingPage';

function App() {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <PageView>
                    <Header />
                    <Logo />
                    <Routes>
                        <Route path="/" element={<RankingPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/signin" element={<SigninPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                    </Routes>
                </PageView>
            </UserContextProvider>
        </BrowserRouter>
    );
}

export default App;

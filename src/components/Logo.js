import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logoShortly from '../assets/images/logo-shortly.png';

export default function Logo() {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate('/')}>
            <h1>Shortly</h1>
            <LogoContainter>
                <img src={logoShortly} alt="Shortly logo" />
            </LogoContainter>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 200;
    font-size: 64px;
    cursor: pointer;
`;

const LogoContainter = styled.div`
    height: 100px;
    width: 100px;
`;

import React from 'react';
import styled from 'styled-components';

import logoShortly from '../assets/images/logo-shortly.png';

export default function Logo() {
    return (
        <Container>
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
`;

const LogoContainter = styled.div`
    height: 100px;
    width: 100px;
`;

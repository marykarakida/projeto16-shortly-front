import React, { useContext } from 'react';
import styled from 'styled-components';

import UserContext from '../contexts/userContext';

import Navbar from './Navbar';

export default function Header() {
    const { isLogged } = useContext(UserContext);

    return (
        <Container>
            {isLogged && <Title>Seja bem-vindo(a), Pessoa!</Title>}
            <Navbar />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 60px 0 20px;
    width: 100%;
`;

const Title = styled.h3`
    font-size: 14px;
    color: #5d9040;
`;

import React, { useMemo, useContext } from 'react';
import styled from 'styled-components';

import UserContext from '../contexts/userContext';

import Navbar from './Navbar';

export default function Header() {
    const { authenticated, getSession } = useContext(UserContext);

    const { user } = useMemo(getSession, [authenticated]);

    return (
        <Container>
            {authenticated && <Title>Seja bem-vindo(a), {user.name}!</Title>}
            <Navbar authenticated={authenticated} />
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

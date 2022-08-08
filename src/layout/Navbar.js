import React, { useContext, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import UserContext from '../contexts/userContext';

export default function Navbar() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const { authenticated, finishSession } = useContext(UserContext);

    const logout = useCallback(() => {
        if (window.confirm('Do you really want to logout?')) {
            finishSession();
            navigate('/');
        }
    }, []);

    if (authenticated) {
        return (
            <NavMenu>
                <NavItem onClick={() => navigate('/home')}>Home</NavItem>
                <NavItem onClick={() => navigate('/')}>Ranking</NavItem>
                <NavItem onClick={logout} underline>
                    Sair
                </NavItem>
            </NavMenu>
        );
    }

    return (
        <NavMenu>
            <NavItem onClick={() => navigate('/signin')} highlight={pathname !== '/signup'}>
                Entrar
            </NavItem>
            <NavItem onClick={() => navigate('/signup')} highlight={pathname === '/signup'}>
                Cadastrar-se
            </NavItem>
        </NavMenu>
    );
}

function NavMenu({ children }) {
    return <Menu>{children}</Menu>;
}

const Menu = styled.ul`
    display: flex;
    gap: 20px;
    margin-left: auto;
`;

const NavItem = styled.li`
    color: ${(props) => (props.highlight ? '#5D9040' : '#9C9C9C')};
    text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
    cursor: pointer;
`;

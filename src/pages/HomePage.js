import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../contexts/userContext';

import PageContainer from '../layout/PageContainer';

export default function HomePage() {
    const navigate = useNavigate();
    const { authenticated } = useContext(UserContext);

    useEffect(() => {
        if (authenticated) {
            navigate('/home', { replace: true });
        }
    }, [authenticated]);

    return (
        <PageContainer>
            <h1>This is Home Page</h1>
        </PageContainer>
    );
}

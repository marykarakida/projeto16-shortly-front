import React, { createContext, useState, useEffect, useMemo } from 'react';

const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(null);

    const getSession = () => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        return { token, user };
    };

    const finishSession = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuthenticated(false);
    };

    const checkSession = () => {
        const { token, user } = getSession();

        if (token && user) {
            setAuthenticated(true);
        } else {
            finishSession();
        }
    };

    useEffect(() => {
        checkSession();
    }, []);

    const values = useMemo(() => ({ authenticated, getSession, checkSession, finishSession }), [authenticated]);

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export default UserContext;

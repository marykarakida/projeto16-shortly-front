import React, { createContext, useState, useMemo } from 'react';

const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);

    const changeUserStatus = () => {
        setIsLogged(!isLogged);
    };

    const values = useMemo(() => ({ isLogged, changeUserStatus }), [isLogged]);

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export default UserContext;

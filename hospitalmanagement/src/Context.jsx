import { createContext, useContext, useState } from 'react';
import AuthService from './services/AuthService';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const contextValue = {
        user,
        setUser,
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
}

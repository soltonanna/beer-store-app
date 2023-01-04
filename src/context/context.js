import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
export default AuthContext;


export const AuthProvider = ({children}) => {
    const [accessTokens, setAccessTokens] = useState('33gogmtvkusrhqsozfyvp');

    const rand = () => {
        return Math.random().toString(36).substr(2);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setAccessTokens(rand() + rand());
            localStorage.setItem('token', accessTokens);
        }, 80000 );

        return () => {
            clearInterval(interval);
        };
    }, [accessTokens]);

    const contextData = {
        accessTokens: accessTokens,
    }

    return (
        <AuthContext.Provider value = { contextData }>  
           { children }
        </AuthContext.Provider>
     )
}
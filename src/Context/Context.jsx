import React, { createContext, useEffect, useState } from 'react';

export const contextData = createContext();

export default function StoreContextProvider({ children }) {
    const [userLogedin, setUserLogedin] = useState(false);
    useEffect(() => {
        
        return () => {
            
        };
    }, []);
    return (
        <contextData.Provider value={{userLogedin }}>
            {children}
        </contextData.Provider>
    )
};
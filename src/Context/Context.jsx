import React, { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export const contextData = createContext();

export default function StoreContextProvider({ children }) {
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const userID = cookies?.token?.data?.user?.id;
    const token = cookies?.token?.data?.token;
    const [userData, setUserData] = useState({});
    const fetchUserData = async () => {
        try {
            // url from vite.config
            const response = await fetch(`/api/user/${userID}`, {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setUserData(data.data);
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <contextData.Provider value={{ userID, token, fetchUserData, userData }}>
            {children}
        </contextData.Provider>
    )
};
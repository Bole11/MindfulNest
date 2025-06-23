import { createContext, useState, useEffect, Children } from "react";
import { login, logout as apiLogout, logout } from "../api/api.js";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        if (token) {

        }
    }, [token]);

    const handleLogin = async (email, password) => {
        try {
            const data = await login({ email, lozinka: password });
            localStorage.setItem("token", data.token);
            setToken(data.token);
        } catch (error) {
            console.error('Login failed:', error);
            throw error; 
        }
    };

    const handleLogout = () => {
        apiLogout();
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider 
        value={{
            user,
            token,
            login: handleLogin,
            logout: handleLogout
        }} >
            {children}
        </AuthContext.Provider>
    )
};
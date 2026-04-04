import { createContext, useState } from "react";


export const UserContext = createContext();


const UserProvider = ({ children }) => {


    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    // 1. Método para Iniciar Sesión
    const login = async (userEmail, password) => {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: userEmail, password }),
        });


        const data = await res.json();
        
        if (data.token) {
            setToken(data.token);
            setEmail(data.email);
        } else {
            alert("Error al iniciar sesión");
        }
    };


    // 2. Método para Registrarse
    const register = async (userEmail, password) => {
        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: userEmail, password }),
        });
        const data = await res.json();


        if (data.token) {
            setToken(data.token);
            setEmail(data.email);

        } else {
            alert("Error al registrarse");
        }
    };


    // 3. Método para obtener el Perfil 
    const getProfile = async () => {
        const res = await fetch("http://localhost:5000/api/auth/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await res.json();
        return data;
    };


    // 4. Método para Cerrar Sesión 
    const logout = () => {
        setToken(null);
        setEmail(null);
    };


    return (
        <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
            {children}
        </UserContext.Provider>
    );
    
};


export default UserProvider;
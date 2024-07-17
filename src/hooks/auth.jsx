import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});
    async function signIn({ email, password }) {
        try {
            const res = await api.post("/sessions", { email, password });
            const { user, token } = res.data;

            localStorage.setItem("@rmnotes:user", JSON.stringify(user));
            localStorage.setItem("@rmnotes:token", token);

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token });
        } catch (error) {
            if (error.res) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível carregar as informações.");
            }
        }
    }

    function signOut(){
        const token = localStorage.removeItem("@rmnotes:token");
        const user = localStorage.removeItem("@rmnotes:user");

        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("@rmnotes:token");
        const user = localStorage.getItem("@rmnotes:user");

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ token, user: JSON.parse(user) });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user,

            }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };

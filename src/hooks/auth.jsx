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

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
    async function updateProfile({user, avatarFile}){
        try {
            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const res = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = res.data.avatar;
            }
            await api.put('/users', user);
            localStorage.setItem("@rmnotes:user", JSON.stringify(user));
            setData({user, token: data.token});

            alert("Atualizado com sucesso!")


        }  catch (error) {
            if (error.res) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível carregar as informações.");
            }
        }
    }
    useEffect(() => {
        const token = localStorage.getItem("@rmnotes:token");
        const user = localStorage.getItem("@rmnotes:user");

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ token, user: JSON.parse(user) });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateProfile,
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

import { ReactNode } from "react";
import { AuthContext } from "./context/authContext";
import { useAuth } from "./hooks/useAuth";

interface Props{
    children: ReactNode;
}

export const AuthProvider = ({children}: Props) => {
    const { user, login, logout, setUser } = useAuth();

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
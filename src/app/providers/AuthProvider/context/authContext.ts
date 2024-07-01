
import { createContext } from "react";
import { IUser } from "../../../../entities/user";

interface AuthContext{
    user: null | IUser;
    setUser: (user: null | IUser) => void;
}

export const AuthContext = createContext<AuthContext>({
    user: null,
    setUser: () => {}
})
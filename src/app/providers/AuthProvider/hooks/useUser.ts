import { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { IUser } from "../../../../entities/user";
import { AuthContext } from "../context/authContext";
import { TOKEN } from "../../../../shared/constants/constants";

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { setItem } = useLocalStorage();

    const addUser = (user: IUser) => {
        setUser(user);
        setItem(TOKEN, user.token);
    };

    const removeUser = () => {
        setUser(null);
        setItem(TOKEN, "");
    };

    return { user, addUser, removeUser, setUser };
};
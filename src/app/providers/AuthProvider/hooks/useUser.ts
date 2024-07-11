import { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { IUser } from "../../../../entities/user";
import { AuthContext } from "../context/authContext";
import { USER } from "../../../../shared/constants/constants";

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { removeItem, setItem } = useLocalStorage();

    const addUser = (user: IUser) => {
        setUser(user);
        setItem(USER, JSON.stringify(user));
    };

    const removeUser = () => {
        setUser(null);
        removeItem(USER);
    };

    return { user, addUser, removeUser, setUser };
};
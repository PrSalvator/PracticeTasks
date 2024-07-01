import { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { IUser } from "../../../../entities/user";
import { AuthContext } from "../context/authContext";
import { USER } from "../../../../shared/constants/constants";

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { setItem } = useLocalStorage();

    const addUser = (user: IUser) => {
        setUser(user);
        setItem(USER, JSON.stringify(user));
    };

    const removeUser = () => {
        setUser(null);
        setItem(USER, "");
    };

    return { user, addUser, removeUser, setUser };
};
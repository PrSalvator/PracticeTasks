import { useEffect } from "react";
import { useUser} from "./useUser";
import { IUser } from "../../../../entities/user";
import { useLocalStorage } from "./useLocalStorage";
import { USER } from "../../../../shared/constants/constants";

export const useAuth = () => {
    const { user, addUser, removeUser, setUser } = useUser();
    const { getItem } = useLocalStorage();

    useEffect(() => {
        const user = getItem(USER);
        if(user){
            addUser(JSON.parse(user));
        }
    }, [addUser, getItem]);

    const login = (user: IUser) => {
        addUser(user);
    };

    const logout = () => {
        removeUser();
    };

    return { user, login, logout, setUser };
};
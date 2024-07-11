import { Navigate, Outlet } from "react-router-dom";
import { MainPage } from "../../../pages/main";
import { useAuth } from "../../providers/AuthProvider/hooks/useAuth";
import { useLocalStorage } from "../../providers/AuthProvider/hooks/useLocalStorage";
import { USER } from "../../../shared/constants/constants";
import { useEffect } from "react";

export const PrivateRoute = () => {
    const user = localStorage.getItem(USER);
    if(user !== null) return <Outlet/>
    return <Navigate to="/login"/>;
}
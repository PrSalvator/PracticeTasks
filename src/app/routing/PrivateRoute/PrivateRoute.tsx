import { Navigate } from "react-router-dom";
import { MainPage } from "../../../pages/main";
import { useAuth } from "../../providers/AuthProvider/hooks/useAuth";

export const PrivateRoute = () => {
    debugger
    const {user} = useAuth();
    if(user !== null) return <MainPage/>
    return <Navigate to="/login"/>;
}
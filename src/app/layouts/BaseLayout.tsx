import { Outlet } from "react-router-dom"
import { Header } from "../../widgets/header/ui"
import { useAuth } from "../providers/AuthProvider/hooks/useAuth";
import { AuthContext } from "../providers/AuthProvider/context/authContext";

export const BaseLayout = () => {
    const { user, login, logout, setUser } = useAuth();

    return (
        <AuthContext.Provider value={{user, setUser}}>
            <div>
                <Header/>
                <div className="mt-4">
                    <Outlet/>
                </div>
            </div>
        </AuthContext.Provider>
    )
}
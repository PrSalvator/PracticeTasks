import { Outlet } from "react-router-dom"
import { Header } from "../../widgets/header/ui"
import { AuthContext } from "../providers/AuthProvider/context/authContext";
import { useEffect, useState } from "react";
import { IUser } from "../../entities/user";
import { SnackbarProvider } from "notistack";

export const BaseLayout = () => {
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() => {
        setUser(user);
    }, [user])

    return (
        <AuthContext.Provider value={{user, setUser}}>
            <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
                <div>
                    <Header/>
                    <div className="mt-4">
                        <Outlet/>
                    </div>
                </div>
            </SnackbarProvider>
        </AuthContext.Provider>
    )
}
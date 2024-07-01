import { Outlet } from "react-router-dom"
import { Header } from "../../widgets/header/ui"
import { AuthContext } from "../providers/AuthProvider/context/authContext";
import { useEffect, useState } from "react";
import { IUser } from "../../entities/user";

export const BaseLayout = () => {
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() => {
        setUser(user);
    }, [user])

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
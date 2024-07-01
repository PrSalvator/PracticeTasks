import { Outlet } from "react-router-dom"
import { Header } from "../../widgets/header/ui"

export const BaseLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}
import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "../layouts/BaseLayout";
import { MainPage } from "../../pages/main";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout/>,
        children: [
            {
                path: "/",
                element: <PrivateRoute/>,
                children: [
                    {
                        path: "/",
                        element: <MainPage/>
                    },
                    {
                        path: ":id",
                        element: <MainPage/>
                    },
                ]
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: 'register',
                element: <RegisterPage/>
            }
        ]
    }
]) 
import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "../layouts/BaseLayout";
import { MainPage } from "../../pages/main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: '/login',
                element: <>Login</>
            },
            {
                path: 'register',
                element: <>Register</>
            }
        ]
    }
]) 
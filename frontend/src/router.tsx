import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import Main from "./pages/Main/Main";
import Catalog from "./pages/Catalog/Catalog";
import AuthLayout from "./layout/Auth/AuthLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <div>Такой страницы не существует</div>,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/catalog',
                element: <Catalog />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/login',
                element: <Register />
            }
        ]
    }
])

export default router;
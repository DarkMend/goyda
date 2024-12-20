import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import Main from "./pages/Main/Main";
import Catalog from "./pages/Catalog/Catalog";
import AuthLayout from "./layout/Auth/AuthLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Order from "./pages/Order/Order";
import PrivateRoute from "./providers/PrivateRoute";

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
                path: '/products',
                element: <Catalog />,
            },
            {
                path: '/products/:productId',
                element: <Product />
            },
            {
                path: '/cart',
                element: (
                    <PrivateRoute>
                        <Cart />
                    </PrivateRoute>
                )
            },
            {
                path: '/orders',
                element: (
                    <PrivateRoute>
                        <Orders />
                    </PrivateRoute>
                )
            },
            {
                path: '/orders/:orderId',
                element: (
                    <PrivateRoute>
                        <Order />
                    </PrivateRoute>
                )
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
                path: '/auth/reg',
                element: <Register />
            }
        ]
    }
])

export default router;
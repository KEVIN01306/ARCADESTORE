import { lazy } from "react";
import FullLayout from "../layouts/Full/FullLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import BlankLayout from "../layouts/Blanck/BlankLayout";
import { gamesRoutes } from "../modules/Games/routes";
import { UsersRoutes } from "../modules/Users/routes";
import { authRoutes } from "../modules/Auth/routes";

const Home = lazy(() => import('../modules/Games/pages/GamesList'));


const Router = [
    {
        path: "/",
        element: (
            <FullLayout/>
        ),
        children: [
            { index: true, element: <Home /> },

            ...gamesRoutes,

            ...UsersRoutes,

            { path: '*',  element: <h1>Pagina no encontrada</h1> }
        ]
    },
    {
        path: "/public",
        element: <BlankLayout/>,
        children: [
            ...authRoutes,
            { path: '*',  element: <h1>Pagina no encontrada</h1> }
        ]
    },
    {
        path: '*', element: <Navigate to="/auth/login" replace />
    }
]

const router = createBrowserRouter(Router);
export default router;
import { lazy } from "react";
import FullLayout from "../layouts/Full/FullLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import BlankLayout from "../layouts/Blanck/BlankLayout";

const Home = lazy(() => import('../pages/Home'));
const Games = lazy(() => import('../pages/Games/Games'));


const Router = [
    {
        path: "/",
        element: (
            <FullLayout/>
        ),
        children: [
            { path: '/',  element: <Home /> },
            { path: 'games',  element: <Games/>},
            { path: 'users',  element: <h2>este el users</h2>},
            { path: 'profile',  element: <h2>este el perfil</h2>},
            { path: '*',  element: <h1>Pagina no encontrada</h1> }
        ]
    },
    {
        path: "/auth",
        element: <BlankLayout/>,
        children: [
            { path: 'login', element: <h1>este es el login</h1> },
            { path: 'register', element: <h1>este es el regiter</h1> },
            { path: '*',  element: <h1>Pagina no encontrada</h1> }
        ]
    },
    {
        path: '*', element: <Navigate to="/auth/login" replace />
    }
]

const router = createBrowserRouter(Router);
export default router;
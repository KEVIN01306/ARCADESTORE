import { lazy } from 'react'
import type{ RouteObject  }from 'react-router-dom'

const Login = lazy(() => import('./pages/Login'))


export const authRoutes: RouteObject[] = [
    {
        path: 'auth',

        children: [
            { path: 'login', element: <Login/>}
        ]
    }
]
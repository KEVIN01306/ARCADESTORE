import { lazy } from "react";
import type{ RouteObject} from 'react-router-dom'

const UsersList = lazy(() => import('./pages/UsersList'))
const UserDetail = lazy(() => import('./pages/UserDetail'))
const UserCreate = lazy(() => import('./pages/UserCreate'))
const UserEdit = lazy(() => import('./pages/UserEdit'))

export const UsersRoutes: RouteObject[] = [
    {
        path: 'Users',
        children: [
            {index: true, element: <UsersList/> },
            { path: ':id', element: <UserDetail/> },
            { path: 'create', element: <UserCreate/>},
            { path: ':id/edit', element: <UserEdit/>}
        ]
    }
]

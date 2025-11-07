import { lazy } from "react";
import type{ RouteObject} from 'react-router-dom'
import ProtectedRoute from "../../components/utils/ProtectedRoute";

const UsersList = lazy(() => import('./pages/UsersList'))
const UserDetail = lazy(() => import('./pages/UserDetail'))
const UserCreate = lazy(() => import('./pages/UserCreate'))
const UserEdit = lazy(() => import('./pages/UserEdit'))

export const UsersRoutes: RouteObject[] = [
    {
        path: 'Users',
        children: [
            {index: true, element: 
                <ProtectedRoute allowedRoles={['admin']}>
                    <UsersList/>
                </ProtectedRoute>
            },
            { path: ':id', element: <UserDetail/> },
            { path: 'create', element: 
                <ProtectedRoute allowedRoles={['admin']}>
                    <UserCreate/>
                </ProtectedRoute>
            },
            { path: ':id/edit', element: 
                <ProtectedRoute allowedRoles={['admin']}>
                    <UserEdit/>
                </ProtectedRoute>
            }
        ]
    }
]

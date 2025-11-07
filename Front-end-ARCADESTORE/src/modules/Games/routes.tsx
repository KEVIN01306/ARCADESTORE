import { lazy } from "react";
import type{ RouteObject } from "react-router-dom";
import ProtectedRoute from "../../components/utils/ProtectedRoute";

const GameList = lazy(() => import('./pages/GamesList'));
const GameDetail = lazy(() => import('./pages/GameDetail'));
const GameCreate = lazy(() => import('./pages/GameCreate'));
const GameEdit = lazy(() => import('./pages/GameEdit'));
const Balloon_pop = lazy(() => import('./Games/Balloon-pop/App'));
const Puzzle = lazy(() => import('./Games/Puzzle/App'));
const GamePay = lazy(() => import('./pages/GamePay'));


export const gamesRoutes: RouteObject[] = [
    {
        path: "games",
        children: [
            { index: true, element: <GameList /> },
            { path: ':id', element: <GameDetail /> },
            { path: 'create', element: 
                <ProtectedRoute allowedRoles={['admin']}>
                    <GameCreate/>
                </ProtectedRoute>
            },
            { path: ':id/edit', element: 
                <ProtectedRoute allowedRoles={['admin']}>
                    <GameEdit/>
                </ProtectedRoute>
             },
            { path: 'balloon-pop/play', element: 
                <ProtectedRoute allowedRoles={['user','admin']}>
                    <Balloon_pop/>
                </ProtectedRoute>
             },
            { path: 'puzzle/play', element: 
                <ProtectedRoute allowedRoles={['user','admin']}>
                    <Puzzle/>
                </ProtectedRoute>
            },
            { path: 'checkout', element: 
                <ProtectedRoute allowedRoles={['user','admin']}>
                    <GamePay/>
                </ProtectedRoute>
            },
        ]
    }
]
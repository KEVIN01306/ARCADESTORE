import { lazy } from "react";
import type{ RouteObject } from "react-router-dom";

const GameList = lazy(() => import('./pages/GamesList'));
const GameDetail = lazy(() => import('./pages/GameDetail'));
const GameCreate = lazy(() => import('./pages/GameCreate'));
const GameEdit = lazy(() => import('./pages/GameEdit'));


export const gamesRoutes: RouteObject[] = [
    {
        path: "games",
        children: [
            { index: true, element: <GameList /> },
            { path: ':id', element: <GameDetail /> },
            { path: 'create', element: <GameCreate /> },
            { path: ':id/edit', element: <GameEdit /> },
        ]
    }
]
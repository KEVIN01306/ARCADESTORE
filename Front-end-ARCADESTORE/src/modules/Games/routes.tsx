import { lazy } from "react";
import type{ RouteObject } from "react-router-dom";

const GameList = lazy(() => import('./pages/GamesList'));
const GameDetail = lazy(() => import('./pages/GameDetail'));
const GameCreate = lazy(() => import('./pages/GameCreate'));


export const gamesRoutes: RouteObject[] = [
    {
        path: "games",
        children: [
            { index: true, element: <GameList /> },
            { path: ':id', element: <GameDetail /> },
            { path: 'create', element: <GameCreate /> },
        ]
    }
]
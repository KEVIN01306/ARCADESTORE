import { lazy } from "react";
import type{ RouteObject } from "react-router-dom";

const GameList = lazy(() => import('./pages/GamesList'));
const GameDetail = lazy(() => import('./pages/GameDetail'));


export const gamesRoutes: RouteObject[] = [
    {
        path: "games",
        children: [
            { index: true, element: <GameList /> },
            { path: ':id', element: <GameDetail /> },
        ]
    }
]
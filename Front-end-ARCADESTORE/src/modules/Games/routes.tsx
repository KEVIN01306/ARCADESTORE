import { lazy } from "react";
import type{ RouteObject } from "react-router-dom";

const GameList = lazy(() => import('./pages/GamesList'));
const GameDetail = lazy(() => import('./pages/GameDetail'));
const GameCreate = lazy(() => import('./pages/GameCreate'));
const GameEdit = lazy(() => import('./pages/GameEdit'));
const Balloon_pop = lazy(() => import('./Games/Balloon-pop/App'));
const Puzzle = lazy(() => import('./Games/Puzzle/App'));


export const gamesRoutes: RouteObject[] = [
    {
        path: "games",
        children: [
            { index: true, element: <GameList /> },
            { path: ':id', element: <GameDetail /> },
            { path: 'create', element: <GameCreate /> },
            { path: ':id/edit', element: <GameEdit /> },
            { path: 'balloon-pop/play', element: <Balloon_pop /> },
            { path: 'puzzle/play', element: <Puzzle /> },
        ]
    }
]
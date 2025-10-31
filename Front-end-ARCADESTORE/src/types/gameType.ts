import type { gameSchema } from "../zod/game.schema";
import { z } from 'zod'



export type GameType = z.infer<typeof gameSchema>;


export const GameInitialState = {
    name: "",
    type: "Free",
    price: 0,
    background: "",
    context: "",
}

export const categories = [
  "Acción",
  "Aventura",
  "Rol",
  "Estrategia",
  "Simulación",
  "Deportes",
  "Carreras",
  "Puzle",
  "Ritmo",
  "Arcade",
  "Shooter",
  "Plataformas",
  "Lucha",
  "Sigilo",
  "Supervivencia"
];
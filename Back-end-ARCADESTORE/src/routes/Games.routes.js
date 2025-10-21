import  { Router } from 'express'
import { getGamesHandler } from '../controllers/games.controller.js';

const router = Router();

router.get("/",getGamesHandler);

export default router;
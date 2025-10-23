import  { Router } from 'express'
import { postGameHandler, getGamesHandler, getGameHandler } from '../controllers/games.controller.js';


const router = Router();

router.get("/",getGamesHandler);
router.get("/:id",getGameHandler);
router.post("/",postGameHandler);

export default router;
import  { Router } from 'express'
import { postGameHandler, getGamesHandler, getGameHandler, putGameHandler, deleteGameHandler } from '../controllers/games.controller.js';


const router = Router();

router.get("/",getGamesHandler);
router.get("/:id",getGameHandler);
router.post("/",postGameHandler);
router.put("/:id",putGameHandler);
router.delete("/:id",deleteGameHandler);


export default router;
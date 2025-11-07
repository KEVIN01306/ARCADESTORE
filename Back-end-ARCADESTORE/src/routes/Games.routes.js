import  { Router } from 'express'
import { postGameHandler, getGamesHandler, getGameHandler, putGameHandler, deleteGameHandler } from '../controllers/games.controller.js';
import { verifyTokenHandler } from '../controllers/auth.controller.js';


const router = Router();

router.get("/",getGamesHandler);
router.get("/:id",getGameHandler);
router.post("/", verifyTokenHandler(),postGameHandler);
router.put("/:id", verifyTokenHandler(),putGameHandler);
router.delete("/:id", verifyTokenHandler(),deleteGameHandler);


export default router;
import  { Router } from 'express'
import { getUserHandler, getUsersHandler, patchUserActiveHandler, patchUserGameHandler, patchUserGameMultipleHandler, postUserHandler, putUserHandler } from '../controllers/users.controller.js'
import { verifyTokenHandler } from '../controllers/auth.controller.js';

const router = Router();

router.get("/", verifyTokenHandler(),getUsersHandler);
router.get("/:id", verifyTokenHandler(),getUserHandler);
router.post("/", verifyTokenHandler(),postUserHandler);
router.put("/:id", verifyTokenHandler(),putUserHandler);
router.patch("/:id/active", verifyTokenHandler(),patchUserActiveHandler);
router.patch("/:id/games", verifyTokenHandler(),patchUserGameHandler);
router.patch("/:id/games/multiple", verifyTokenHandler(),patchUserGameMultipleHandler);

export default router; 
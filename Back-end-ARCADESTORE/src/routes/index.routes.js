import { Router } from "express";
import usersRoute from './Users.routes.js'
import gamesRoute from './Games.routes.js'

const router = Router();

router.use("/users",usersRoute);
router.use("/games",gamesRoute);

export default router;

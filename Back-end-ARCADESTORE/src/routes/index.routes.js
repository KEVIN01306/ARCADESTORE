import { Router } from "express";
import usersRoute from './Users.routes.js'
import gamesRoute from './Games.routes.js'
import authRoute from './auth.routes.js'

const router = Router();

router.use("/users",usersRoute);
router.use("/games",gamesRoute);
router.use("/auth",authRoute)

export default router;

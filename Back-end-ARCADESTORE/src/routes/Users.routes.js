import  { Router } from 'express'
import { getUserHandler, getUsersHandler, postUserHandler } from '../controllers/users.controller.js'

const router = Router();

router.get("/",getUsersHandler);
router.get("/:id",getUserHandler);
router.post("/",postUserHandler);

export default router;
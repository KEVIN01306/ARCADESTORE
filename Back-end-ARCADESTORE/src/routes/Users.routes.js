import  { Router } from 'express'
import { getUserHandler, getUsersHandler, patchUserActiveHandler, postUserHandler, putUserHandler } from '../controllers/users.controller.js'

const router = Router();

router.get("/",getUsersHandler);
router.get("/:id",getUserHandler);
router.post("/",postUserHandler);
router.put("/:id",putUserHandler);
router.patch("/:id",patchUserActiveHandler);

export default router;
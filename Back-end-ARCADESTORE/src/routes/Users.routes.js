import  { Router } from 'express'
import { getUserHandler } from '../controllers/users.controller.js'

const router = Router();

router.get("/",getUserHandler);

export default router;
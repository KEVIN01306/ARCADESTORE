import { Router } from "express";
import {loginHandler, registerHandler} from "../controllers/auth.controller.js";

const router = Router()

router.post('/', loginHandler)
router.post('/register', registerHandler)

export default router;
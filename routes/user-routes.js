import express from "express"
import { getAllUser } from "../server/controllers/user-controller.js";
import { signup } from "../server/controllers/user-controller.js";
import { login } from "../server/controllers/user-controller.js";
const router =express.Router();
router.get("/",getAllUser)
router.post("/signup",signup)
router.post("/login",login)
export default router
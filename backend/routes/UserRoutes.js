import express from "express"
import {registerUser,loginUser, updateUserProfile} from "../controllers/UserController.js"
import { protect } from "../middlewares/authMiddleware.js"

const router = express.Router()


router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/profile').post(protect, updateUserProfile)

export default router
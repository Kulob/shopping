import { Router } from "express";
import { register,login } from "../controllers/UserController.js";
import { loginValidation,registerValidation } from "../validations.js";
import handleValidationErrors from "../utils/handleValidationErrors.js";

const router = new Router()

router.post('/register',registerValidation,
handleValidationErrors,register)
router.post('/login',loginValidation,handleValidationErrors,login)

export default router;
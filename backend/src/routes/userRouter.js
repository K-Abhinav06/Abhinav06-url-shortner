import { Router } from 'express';
import {getUserProfile} from '../controllers/userController.js'; // Adjust path as needed
import { isLoggedIn } from '../middlewares/authMiddleware.js'; // Your authentication middleware


const userRouter = Router();

// Route to get the authenticated user's own details
userRouter.get('/profile/me', isLoggedIn, getUserProfile);
export default userRouter;

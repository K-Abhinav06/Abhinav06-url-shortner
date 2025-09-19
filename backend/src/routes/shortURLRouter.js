import { Router } from "express";
import { createShortUrl, getLongUrl} from "./controllers/shortURLController.js";   
import { isLoggedIn } from "../middlewares/authMiddleware.js";

const shortURLRouter = Router();

shortURLRouter.post("/",isLoggedIn,createShortUrl);

// redirect router "/api/s/shortCode"
shortURLRouter.get("/:shortId",isLoggedIn,getLongUrl);      


export default shortURLRouter;

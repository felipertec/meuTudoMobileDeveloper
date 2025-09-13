import {Router} from "express";
import { getPlayer } from "../controllers/players-controller";

const router = Router();

router.get('/player', getPlayer)

export default router;
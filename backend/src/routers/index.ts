import { Router } from "express";
import { getUsers, addUser } from "../controllers";

const router = Router();

router.get('/getallusers', getUsers);
router.post('/adduser', addUser);

export default router;
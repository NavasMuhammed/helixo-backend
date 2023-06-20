import { Router } from "express";
const router = Router();

import * as controller from "../controllers/controllers.js";

/** POST Methods */

router.route("/badges").post(controller.getBadge); // upload details in app

export default router;

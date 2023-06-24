import { Router } from "express";
const router = Router();

import * as controller from "../controllers/controllers.js";

/** POST Methods */

/** GET Methods */

router.route("/badges").get(controller.getBadge); // get all badges

export default router;

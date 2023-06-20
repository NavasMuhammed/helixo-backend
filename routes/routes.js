import { Router } from "express";
const router = Router();

import * as controller from "../controllers/controllers.js";

/** POST Methods */

router.route("/badges").post(controller.postBadge); // upload details in app


/** GET Methods */

router.route("/badges").get(controller.getBadge); // get all badges

export default router;

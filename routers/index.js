/**
 * import External lib
 */
import express from "express";
/**
 * Import Internal Lib
 */

import { loginRouter } from "./auth.routes";
import { employeeRouter } from "./employee.routes";

const router = express.Router()

router.use(loginRouter)
router.use(employeeRouter)

export {router as RouterV1}
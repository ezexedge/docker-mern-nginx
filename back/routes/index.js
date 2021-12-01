import express from "express";
const router = express.Router();

import {
probando,
test
} from '../controller'




router.get("/:nombre",probando)

router.get("/prueba/test",test)

module.exports = router;

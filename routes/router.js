const { Router } = require("express");
const router = Router();

const controller = require("../controllers/controller");

router.get("/", controller.getIndex);

module.exports = router;

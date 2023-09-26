const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.get);

router.post("/", mainController.create);

router.put("/:id", mainController.update);

router.get("/metrics", mainController.getMetrics)


module.exports = router;
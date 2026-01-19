const express = require("express");
const TaskController = require("../controllers/TaskController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.post("/", TaskController.create);
router.get("/", TaskController.list);
router.put("/:id", TaskController.update);
router.delete("/:id", TaskController.delete);

module.exports = router;

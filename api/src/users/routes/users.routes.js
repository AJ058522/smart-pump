const express = require("express");
const router = express.Router();

const {
  updateUserController,
  getOneUserController,
} = require("../controllers");
const { updateValidator } = require("../validators");

router.put("/:userId", updateValidator, updateUserController.updateUser);
router.get("/:userId", getOneUserController.getOneUser);

module.exports = router;

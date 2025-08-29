const express = require("express");
const router = express.Router();
const {
  createItem,
  getApprovedItems,
  getPendingItems,
  updateStatus,
  claimItem
} = require("../controllers/itemController");

router.post("/", createItem);
router.get("/approved", getApprovedItems);
router.get("/pending", getPendingItems);
router.put("/status/:id", updateStatus);
router.put("/claim/:id", claimItem);

module.exports = router;

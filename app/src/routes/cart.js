const express = require("express");
const router = express.Router();
const { addItem , deleteAllItems , deleteItem, allItems } = require("../controllers/cartController");


router.get("/", allItems );
router.post("/:item", addItem );
router.delete("/:item", deleteItem );
router.delete("/", deleteAllItems );

module.exports = router;